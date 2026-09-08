import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import {
  DEFAULT_ROTATION,
  articleTitle,
  getDailyArticle,
  pacificDisplayDate,
  parseArticleList,
  parseWikipediaArticle,
} from "../lib/wiki-banner/articles";

test("the requested articles cycle in order, then repeat without missing a day", () => {
  assert.equal(DEFAULT_ROTATION.articles.length, 7);
  for (let day = 0; day < 21; day++) {
    const now = new Date(Date.UTC(2026, 8, 8 + day, 12));
    assert.equal(getDailyArticle(DEFAULT_ROTATION, now).url, DEFAULT_ROTATION.articles[day % 7]);
  }
});

test("the pick stays fixed across UTC midnight and changes at Pacific midnight", () => {
  const before = getDailyArticle(DEFAULT_ROTATION, new Date("2026-09-09T06:59:59Z"));
  const after = getDailyArticle(DEFAULT_ROTATION, new Date("2026-09-09T07:00:00Z"));
  assert.equal(before.displayDate, "2026-09-08");
  assert.equal(before.url, DEFAULT_ROTATION.articles[0]);
  assert.equal(after.url, DEFAULT_ROTATION.articles[1]);
});

test("spring and fall daylight-saving transitions each count as one calendar day", () => {
  for (const [startDate, dates] of [
    ["2026-03-07", ["2026-03-07T08:00:00Z", "2026-03-08T08:00:00Z", "2026-03-09T07:00:00Z"]],
    ["2026-10-31", ["2026-10-31T07:00:00Z", "2026-11-01T07:00:00Z", "2026-11-02T08:00:00Z"]],
  ] as const) {
    const rotation = { ...DEFAULT_ROTATION, startDate };
    dates.forEach((date, index) => assert.equal(getDailyArticle(rotation, new Date(date)).url, rotation.articles[index]));
  }
});

test("single-article rotations and dates before the anchor remain valid", () => {
  const now = new Date("2026-09-07T12:00:00Z");
  assert.equal(getDailyArticle(DEFAULT_ROTATION, now).url, DEFAULT_ROTATION.articles[6]);
  assert.equal(getDailyArticle({ ...DEFAULT_ROTATION, articles: [DEFAULT_ROTATION.articles[0]] }, now).url, DEFAULT_ROTATION.articles[0]);
  assert.equal(pacificDisplayDate(new Date("2026-12-01T07:59:59Z")), "2026-11-30");
});

test("titles and desktop/mobile Wikipedia URLs normalize to safe HTTPS article links", () => {
  for (const value of [" Telegraph Avenue ", "Telegraph_Avenue", "https://en.wikipedia.org/wiki/Telegraph_Avenue#Origins", "http://en.m.wikipedia.org/wiki/Telegraph%20Avenue?oldid=123"]) {
    assert.equal(parseWikipediaArticle(value), DEFAULT_ROTATION.articles[0]);
  }
  assert.equal(articleTitle(parseWikipediaArticle("C (programming language)")), "C (programming language)");
  assert.deepEqual(parseArticleList("Telegraph Avenue\r\n\r\nHigh Bandwidth Memory"), DEFAULT_ROTATION.articles.slice(0, 2));
});

test("unsafe URLs, tool pages, malformed encoding, and empty titles are rejected", () => {
  for (const value of ["", "https://example.com/wiki/Test", "https://en.wikipedia.org.evil.test/wiki/Test", "javascript:alert(1)", "ftp://en.wikipedia.org/wiki/Test", "//en.wikipedia.org/wiki/Test", "https://user:pass@en.wikipedia.org/wiki/Test", "https://en.wikipedia.org:444/wiki/Test", "https://en.wikipedia.org/w/index.php", "https://en.wikipedia.org/wiki/", "https://en.wikipedia.org/wiki/%ZZ", "https://en.wikipedia.org/wiki/Special:Random", "<script>alert(1)</script>"]) {
    assert.throws(() => parseWikipediaArticle(value), Error, value);
  }
});

test("invalid edits cannot clear the rotation or introduce duplicate articles", () => {
  assert.throws(() => parseArticleList("\n \n"), /between 1 and 100/);
  assert.throws(() => parseArticleList("Telegraph Avenue\nhttps://en.wikipedia.org/wiki/Telegraph_Avenue"), /only once/);
  assert.throws(() => parseArticleList("Telegraph Avenue\nhttps://example.com"), /Line 2/);
  assert.throws(() => parseArticleList(Array.from({ length: 101 }, (_, index) => `Article ${index}`).join("\n")), /between 1 and 100/);
});

test("database seeds match the offline rotation and do not overwrite saved lists", () => {
  const sql = readFileSync(new URL("../supabase/migrations/0003_wiki_banner_settings.sql", import.meta.url), "utf8");
  const seed = sql.match(/'(\[[\s\S]*?\])'::jsonb, '([^']+)'/);
  assert.ok(seed);
  assert.deepEqual(JSON.parse(seed[1]), DEFAULT_ROTATION.articles);
  assert.equal(seed[2], DEFAULT_ROTATION.startDate);
  assert.match(sql, /on conflict \(id\) do nothing/i);
});
