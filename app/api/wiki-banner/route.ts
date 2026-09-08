import { NextResponse } from "next/server";
import { DEFAULT_ROTATION, getDailyArticle } from "@/lib/wiki-banner/articles";
import { getArticleRotation } from "@/lib/wiki-banner/queries";

export const dynamic = "force-dynamic";

export async function GET() {
  let rotation = DEFAULT_ROTATION;
  try {
    rotation = await getArticleRotation();
  } catch {
    console.error("[wiki-banner] Using default rotation; settings could not be loaded.");
  }
  return NextResponse.json(getDailyArticle(rotation), {
    headers: { "Cache-Control": "no-store" },
  });
}
