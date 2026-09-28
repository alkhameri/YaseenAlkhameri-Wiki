import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { papers, papersSection } from "../content/papers";
import { getAllJSONContent, getArticleNavigation, getJSONContent, sectionId } from "../lib/json-content";
import { navigationItems } from "../lib/navigation";
import { searchJSONContent } from "../lib/search-json";

test("the Papers catalogue adds the MOESI-D working paper and preserves the earlier reports", () => {
  assert.equal(papers.length, 3);
  assert.equal(papers[0].id, "moesi-d");
  assert.equal(papers[0].featured, true);
  assert.equal(papers[0].status, "Working paper");
  assert.deepEqual(papers[0].authors, ["Manav Sharma", "Yaseen Alkhameri"]);
  assert.equal(papers[0].githubUrl, "https://github.com/msharma2026/MOESI-D-Architecture");
  assert.match(String(papers[0].description), /simulation study/);
  assert.equal(papers[1].id, "cache-coherence-gem5");
  assert.equal(papers[1].featured, true);
  assert.equal(papers.filter((paper) => paper.featured).length, 2);
  assert.deepEqual(papers[1].authors, ["Kevin Le", "Kilho Chang", "Vivian Ly Nguyen", "Yaseen Alkhameri"]);
  assert.deepEqual(papers[2].authors, ["Yaseen Alkhameri", "Ricardo Gonzales", "Justin Hsu", "Max Madrigal", "Isidro Pulido"]);
  assert.match(String(papers[1].description), /not an implemented or validated protocol/);
  assert.match(String(papersSection.description), /not peer-reviewed/);
  for (const paper of papers) {
    assert.equal(paper.status, paper.id === "moesi-d" ? "Working paper" : "Unpublished");
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
  for (const query of ["MOESI-D", "Manav Sharma", "no-return", "Kevin Le", "Isidro Pulido"]) {
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
