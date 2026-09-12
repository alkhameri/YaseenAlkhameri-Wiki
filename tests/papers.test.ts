import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { papers, papersSection } from "../content/papers";
import { getAllJSONContent, getArticleNavigation, getJSONContent, sectionId } from "../lib/json-content";
import { navigationItems } from "../lib/navigation";
import { searchJSONContent } from "../lib/search-json";

test("the Papers catalogue features cache coherence and accurately labels both coauthored works", () => {
  assert.equal(papers.length, 2);
  assert.equal(papers[0].id, "cache-coherence-gem5");
  assert.equal(papers[0].featured, true);
  assert.equal(papers.filter((paper) => paper.featured).length, 1);
  assert.deepEqual(papers[0].authors, ["Kevin Le", "Kilho Chang", "Vivian Ly Nguyen", "Yaseen Alkhameri"]);
  assert.deepEqual(papers[1].authors, ["Yaseen Alkhameri", "Ricardo Gonzales", "Justin Hsu", "Max Madrigal", "Isidro Pulido"]);
  assert.match(String(papers[0].description), /not an implemented or validated protocol/);
  for (const paper of papers) {
    assert.equal(paper.status, "Unpublished");
    assert.equal(paper.date, "2026");
    assert.equal(paper.venue, undefined);
    assert.ok(String(paper.description).split(/\s+/).length < 90, "Summaries stay concise");
  }
});

test("each paper links to a deployed PDF with a unique, stable URL", () => {
  assert.equal(new Set(papers.map((paper) => paper.websiteUrl)).size, papers.length);
  for (const paper of papers) {
    assert.ok(paper.websiteUrl);
    assert.match(paper.websiteUrl, /^\/papers\/[a-z0-9-]+\.pdf$/);
    const pdf = readFileSync(new URL(`../public${paper.websiteUrl}`, import.meta.url));
    assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
    assert.ok(pdf.length > 1000);
  }
});

test("papers appear only within Career, without a separate Pages-menu or search entry", async () => {
  const career = await getJSONContent("career");
  assert.ok(!navigationItems.some((item) => item.href === "/papers" || item.sidebarLabel === "Papers"));
  assert.ok(!Object.values(await getAllJSONContent()).some((content) => content.url === "/papers"));
  await assert.rejects(getJSONContent("papers"), /Content file not found/);
  assert.equal(career.sections.find((section) => section.group === "papers"), papersSection);
  assert.equal(career.sections[0].group, "employment");
  const anchors = getArticleNavigation(career).map((item) => item.href);
  for (const id of ["papers", ...papers.map(sectionId)]) assert.ok(anchors.includes(`#${id}`));
});

test("site search finds paper topics and coauthors using real paper anchors", async () => {
  for (const query of ["MOESI", "Kevin Le", "Isidro Pulido"]) {
    const results = await searchJSONContent(query);
    assert.ok(!results.some((item) => item.url === "/papers"));
    const result = results.find((item) => item.url === "/career");
    assert.ok(result, `Missing Career paper search result for ${query}`);
    if (result.sectionId) assert.ok(["papers", ...papers.map(sectionId)].includes(result.sectionId));
  }
});

test("the old Papers page redirects to Career without redirecting PDF downloads", async () => {
  const { default: config } = await import("../next.config.mjs");
  assert.ok(config.redirects);
  const redirects = await config.redirects();
  assert.deepEqual(redirects.find((redirect) => redirect.source === "/papers"), {
    source: "/papers", destination: "/career#papers", permanent: true,
  });
  assert.ok(!redirects.some((redirect) => redirect.source.startsWith("/papers/")));
});
