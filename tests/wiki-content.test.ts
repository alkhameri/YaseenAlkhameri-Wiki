import assert from "node:assert/strict";
import { test } from "node:test";
import { getArticleNavigation, getJSONContent, sectionId } from "../lib/json-content";
import { searchJSONContent } from "../lib/search-json";
import { validateAmaAnswer, validateAmaQuestion, validateQuestionId } from "../lib/ama/validation";

test("home ends at the activity grid without Education or Skills sections or broken focus links", async () => {
  const content = await getJSONContent("home");
  assert.equal(content.sections.at(-1)?.variant, "home-activity-grid");
  assert.deepEqual(getArticleNavigation(content).map((item) => item.label), ["Overview"]);
  assert.ok(!content.sections.some((section) => ["Education", "Skills"].includes(section.title)));

  const focusItems = content.sections.find((section) => section.variant === "home-role-focus")!.roleFocusItems!;
  for (const item of focusItems) {
    const [path, anchor] = item.seeAlso.href.split("#");
    const target = await getJSONContent(path === "/" ? "home" : path.slice(1));
    if (anchor) assert.ok(getArticleNavigation(target).some((link) => link.href === `#${anchor}`));
  }
});

test("the new catalogue keeps all eight existing projects and provides working article anchors", async () => {
  const content = await getJSONContent("projects");
  assert.equal(content.sections.length, 8);
  assert.ok(content.sections.some((section) => section.title.startsWith("AggieShare")));
  assert.ok(content.sections.some((section) => section.title.startsWith("Planck")));
  assert.deepEqual(getArticleNavigation(content).map((item) => item.href), content.sections.map((section) => `#${sectionId(section)}`));
});

test("career search resolves to real section anchors and handles literal programming terms", async () => {
  const content = await getJSONContent("career");
  const companies = content.sections[0].subsections!;
  assert.deepEqual(companies.map((company) => company.title), ["Solidigm", "AIVision Food"]);
  assert.equal(content.url, "/career");
  const results = await searchJSONContent("configuration");
  const careerResult = results.find((item) => item.url === "/career");
  assert.ok(careerResult?.sectionId);
  const ids = companies.flatMap((company) => [sectionId(company), ...company.subsections!.map(sectionId)]);
  assert.ok(ids.includes(careerResult.sectionId) || careerResult.sectionId === "employment");
  assert.ok((await searchJSONContent("C++")).length > 0);
  await searchJSONContent("[test](.*)");
});

test("AMA rejects empty/oversized content and invalid identifiers before database mutations", () => {
  assert.equal(validateAmaQuestion("  What FPGA do you use?  "), "What FPGA do you use?");
  assert.equal(validateAmaAnswer("  DE1-SoC.  "), "DE1-SoC.");
  for (const question of ["", "  ", "x".repeat(1001)]) assert.throws(() => validateAmaQuestion(question));
  for (const answer of ["", "  ", "x".repeat(5001)]) assert.throws(() => validateAmaAnswer(answer));
  assert.throws(() => validateQuestionId("invalid"));
  assert.doesNotThrow(() => validateQuestionId("00000000-0000-4000-8000-000000000001"));
});
