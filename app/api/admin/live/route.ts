import { NextRequest, NextResponse } from "next/server";
import { getLiveVisitors } from "@/lib/admin/queries";
import { verifyAdminSession, ADMIN_COOKIE } from "@/lib/auth/session";
import { errorResponse } from "@/lib/api-errors";
import { isMissingSupabaseFunctionError } from "@/lib/admin/errors";
import { hasSupabaseConfig } from "@/lib/env";

export async function GET(req: NextRequest) {
  const ok = await verifyAdminSession(req.cookies.get(ADMIN_COOKIE)?.value);
  if (!ok) return errorResponse("unauthorized", "Authentication required", 401);
  if (!hasSupabaseConfig()) {
    return errorResponse("not_configured", "Analytics is not configured", 503);
  }
  let visitors: Awaited<ReturnType<typeof getLiveVisitors>>;
  try {
    visitors = await getLiveVisitors();
  } catch (error) {
    if (!isMissingSupabaseFunctionError(error)) throw error;
    return errorResponse(
      "analytics_not_initialized",
      "Run the Supabase SQL migrations before using the admin live view.",
      503
    );
  }
  return NextResponse.json({ visitors });
}
