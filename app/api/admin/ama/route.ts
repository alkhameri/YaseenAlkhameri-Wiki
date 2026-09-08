import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/auth/session";
import { archiveAmaQuestion, saveAmaAnswer } from "@/lib/ama/queries";

export async function POST(req: NextRequest) {
  if (!(await verifyAdminSession(req.cookies.get(ADMIN_COOKIE)?.value))) {
    return NextResponse.redirect(new URL("/admin/login?next=/admin/ama", req.url), 303);
  }
  if (req.headers.get("origin") !== req.nextUrl.origin) {
    return NextResponse.json({ error: "Manage questions from this site's admin page." }, { status: 403 });
  }
  const back = (query: string) => NextResponse.redirect(new URL(`/admin/ama?${query}`, req.url), 303);
  try {
    const form = await req.formData();
    const id = String(form.get("id") ?? "");
    if (form.get("action") === "archive") {
      await archiveAmaQuestion(id);
      revalidatePath("/ama");
      return back("archived=1");
    }
    if (form.get("action") !== "publish") return back("error=save");
    await saveAmaAnswer(id, String(form.get("answer") ?? ""));
    revalidatePath("/ama");
    return back(`question=${encodeURIComponent(id)}&saved=1`);
  } catch {
    return back("error=save");
  }
}
