import { NextRequest, NextResponse } from "next/server";
import { getLiveVisitors } from "@/lib/admin/queries";
import { verifyAdminSession, ADMIN_COOKIE } from "@/lib/auth/session";
import { errorResponse } from "@/lib/api-errors";
import { hasSupabaseConfig } from "@/lib/env";

export async function GET(req: NextRequest) {
  const ok = await verifyAdminSession(req.cookies.get(ADMIN_COOKIE)?.value);
  if (!ok) return errorResponse("unauthorized", "Authentication required", 401);
  if (!hasSupabaseConfig()) {
    return errorResponse("not_configured", "Analytics is not configured", 503);
  }
  const visitors = await getLiveVisitors();
  return NextResponse.json({ visitors });
}
