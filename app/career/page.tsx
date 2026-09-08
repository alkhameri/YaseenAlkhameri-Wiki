import WikiArticlePage from "@/components/WikiArticlePage";
import ProfessionalWorkTabs from "@/components/ProfessionalWorkTabs";
import { careerContent } from "@/content/career";

export default function CareerPage() {
  return (
    <WikiArticlePage currentPath="/career" content={careerContent}>
      <ProfessionalWorkTabs content={careerContent} />
    </WikiArticlePage>
  );
}
