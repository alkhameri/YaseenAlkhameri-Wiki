import { hasSupabaseConfig } from "@/lib/env";
import { getSupabase } from "@/lib/supabase/server";
import { DEFAULT_ROTATION, parseArticleList, type ArticleRotation } from "./articles";

export async function getArticleRotation(): Promise<ArticleRotation> {
  if (!hasSupabaseConfig()) return DEFAULT_ROTATION;

  const { data, error } = await getSupabase()
    .from("wiki_banner_settings")
    .select("articles, start_date")
    .eq("id", true)
    .maybeSingle();

  if (error) throw error;
  if (!data) return DEFAULT_ROTATION;
  if (
    !Array.isArray(data.articles) ||
    !data.articles.every((article: unknown) => typeof article === "string") ||
    typeof data.start_date !== "string" ||
    !/^\d{4}-\d{2}-\d{2}$/.test(data.start_date) ||
    !Number.isFinite(Date.parse(`${data.start_date}T00:00:00Z`))
  ) {
    throw new Error("The saved article rotation is invalid.");
  }
  return { articles: parseArticleList(data.articles.join("\n")), startDate: data.start_date };
}

export async function saveArticleRotation(rotation: ArticleRotation): Promise<void> {
  const { error } = await getSupabase().from("wiki_banner_settings").upsert({
    id: true,
    articles: rotation.articles,
    start_date: rotation.startDate,
    updated_at: new Date().toISOString(),
  });
  if (error) throw error;
}
