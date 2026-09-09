import PageLayout from "@/components/PageLayout";
import BlogList from "@/components/BlogList";
import { getAllBlogPosts } from "@/lib/blog-content";
import ArticleHeader from "@/components/ArticleHeader";

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <PageLayout currentPath="/blog">
      <ArticleHeader title="Blog" showTabs={false} />
      <BlogList posts={posts} />
    </PageLayout>
  );
}
