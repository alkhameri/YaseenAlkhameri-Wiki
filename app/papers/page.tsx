import type { Metadata } from "next";
import WikiArticlePage from "@/components/WikiArticlePage";
import ProfessionalWorkTabs from "@/components/ProfessionalWorkTabs";
import { papersContent } from "@/content/papers";

export const metadata: Metadata = {
  title: "Papers — Yaseen Alkhameri",
  description: papersContent.description,
};

export default function PapersPage() {
  return (
    <WikiArticlePage currentPath="/papers" content={papersContent}>
      <ProfessionalWorkTabs content={papersContent} />
    </WikiArticlePage>
  );
}
