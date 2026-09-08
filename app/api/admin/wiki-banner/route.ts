import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/auth/session";
import { hasSupabaseConfig } from "@/lib/env";
import { getDailyArticle, pacificDisplayDate, parseArticleList } from "@/lib/wiki-banner/articles";
import { saveArticleRotation } from "@/lib/wiki-banner/queries";

export async function PUT(req: NextRequest) {
  if (!(await verifyAdminSession(req.cookies.get(ADMIN_COOKIE)?.value))) {
    return NextResponse.json({ error: "Sign in to save the article list." }, { status: 401 });
  }
  if (req.headers.get("origin") !== req.nextUrl.origin) {
    return NextResponse.json({ error: "Save articles from this site's admin page." }, { status: 403 });
  }
  if (!hasSupabaseConfig()) {
    return NextResponse.json({ error: "Configure Supabase before saving the article list." }, { status: 503 });
  }

  let articles: string[];
  try {
    const body = await req.text();
    if (body.length > 100_000) throw new Error("The article list is too large.");
    const data = JSON.parse(body);
    if (typeof data?.articles !== "string") throw new Error("Provide an article list, one title or URL per line.");
    articles = parseArticleList(data.articles);
  } catch (error) {
    return NextResponse.json({ error: error instanceof SyntaxError ? "Invalid request." : (error as Error).message }, { status: 400 });
  }

  const rotation = { articles, startDate: pacificDisplayDate() };
  try {
    await saveArticleRotation(rotation);
  } catch {
    return NextResponse.json({ error: "The list could not be saved. Check the Supabase connection and run migration 0003_wiki_banner_settings.sql." }, { status: 503 });
  }
  return NextResponse.json({ rotation, today: getDailyArticle(rotation) }, {
    headers: { "Cache-Control": "no-store" },
  });
}
