import PageLayout from "@/components/PageLayout";
import ArticleHeader from "@/components/ArticleHeader";
import WorkCatalogueContent from "@/components/WorkCatalogueContent";
import { getJSONContent } from "@/lib/json-content";

export default async function ProjectsPage() {
  const content = await getJSONContent("projects");

  return (
    <PageLayout currentPath="/projects" content={content}>
      <ArticleHeader title={content.title} />
      <WorkCatalogueContent content={content} />
    </PageLayout>
  );
}
