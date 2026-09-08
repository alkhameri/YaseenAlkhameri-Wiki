import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminPageLayout from "@/components/admin/AdminPageLayout";
import AdminArticleHeader from "@/components/admin/AdminArticleHeader";
import ArticleRotationEditor from "@/components/admin/ArticleRotationEditor";
import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/auth/session";
import { hasSupabaseConfig } from "@/lib/env";
import { DEFAULT_ROTATION, getDailyArticle } from "@/lib/wiki-banner/articles";
import { getArticleRotation } from "@/lib/wiki-banner/queries";

export const dynamic = "force-dynamic";

export default async function AdminBannerPage() {
  if (!(await verifyAdminSession((await cookies()).get(ADMIN_COOKIE)?.value))) {
    redirect("/admin/login?next=/admin/banner");
  }
  let rotation = DEFAULT_ROTATION;
  let setupMessage: string | undefined;
  if (!hasSupabaseConfig()) {
    setupMessage = "The default articles are live. To save edits, configure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY, then run supabase/migrations/0003_wiki_banner_settings.sql.";
  } else {
    try {
      rotation = await getArticleRotation();
    } catch {
      setupMessage = "The saved list could not be loaded. Check the Supabase connection and run supabase/migrations/0003_wiki_banner_settings.sql. The public banner is using the default articles.";
    }
  }
  return (
    <AdminPageLayout currentWindow="">
      <AdminArticleHeader title="Article of the day" subtitle="Manage Yaseen's Wikipedia picks" activeTab="banner" />
      <article className="max-w-4xl px-4 py-6 sm:px-6">
        <ArticleRotationEditor rotation={rotation} today={getDailyArticle(rotation)} setupMessage={setupMessage} />
      </article>
    </AdminPageLayout>
  );
}
