import { NextRequest, NextResponse } from "next/server";
import { createAmaQuestion } from "@/lib/ama/queries";

export async function POST(req: NextRequest) {
  if (req.headers.get("origin") !== req.nextUrl.origin) {
    return NextResponse.json({ error: "Submit questions from this site." }, { status: 403 });
  }
  const back = (query: string) => NextResponse.redirect(new URL(`/ama?${query}`, req.url), 303);
  let form: FormData;
  try { form = await req.formData(); } catch { return back("error=empty"); }
  if (form.get("website")) return back("submitted=1");

  const question = String(form.get("question") ?? "").trim();
  if (!question) return back("error=empty");
  if (question.length > 1000) return back("error=too-long");
  try {
    await createAmaQuestion(question);
  } catch {
    return back("error=unavailable");
  }
  return back("submitted=1");
}
