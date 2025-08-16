import PageLayout from "@/components/PageLayout"
import ArticleHeader from "@/components/ArticleHeader"
import WikiContent from "@/components/WikiContent"
import { getJSONContent } from "@/lib/json-content"

export default async function ResearchPage() {
  const content = await getJSONContent('research')
  
  return (
    <PageLayout currentPath="/research">
      <ArticleHeader title={content.title} />
      <WikiContent content={content} />
    </PageLayout>
  )
}