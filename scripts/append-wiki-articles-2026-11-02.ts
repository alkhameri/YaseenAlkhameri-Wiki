import assert from "node:assert/strict";
import { createClient } from "@supabase/supabase-js";
import { parseArticleList } from "../lib/wiki-banner/articles";

// Explicit one-time maintenance command; dry-run unless --apply is supplied.
const additions = parseArticleList("MacArthur Maze\nApple silicon\nNintendo DSi\nMissingNo.");

async function main() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Supabase configuration is required.");
  const db = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  const { data: before, error } = await db.from("wiki_banner_settings")
    .select("articles, start_date, updated_at").eq("id", true).single();
  if (error) throw new Error(`Cannot read the saved rotation (${error.code}).`);
  assert.ok(Array.isArray(before.articles) && before.articles.every((entry: unknown) => typeof entry === "string"));
  const existing = new Set(parseArticleList(before.articles.join("\n")));
  const missing = additions.filter((article) => !existing.has(article));
  if (!missing.length) {
    console.log("All four requested articles are already in the saved rotation.");
    return;
  }
  const articles = [...before.articles, ...missing];
  parseArticleList(articles.join("\n"));
  console.log(`Append ${missing.length} articles: ${before.articles.length} -> ${articles.length}; keep start date ${before.start_date}.`);
  if (!process.argv.includes("--apply")) {
    console.log("Dry run only. Pass --apply to save.");
    return;
  }
  // Compare-and-swap prevents overwriting a concurrent edit in the admin UI.
  const { data: after, error: updateError } = await db.from("wiki_banner_settings")
    .update({ articles, updated_at: new Date().toISOString() })
    .eq("id", true).eq("updated_at", before.updated_at)
    .select("articles, start_date").maybeSingle();
  if (updateError) throw new Error(`Cannot update the saved rotation (${updateError.code}).`);
  if (!after) throw new Error("The list changed concurrently; rerun after reviewing the current list.");
  assert.deepEqual(after.articles, articles);
  assert.equal(after.start_date, before.start_date);
  console.log(`Saved and verified ${articles.length} articles; previous entries and start date are preserved.`);
}

main().catch((error: Error) => {
  console.error(error.message);
  process.exitCode = 1;
});
