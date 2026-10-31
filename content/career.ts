import type { ContentSection, JSONContent } from "@/lib/json-content";
import { industryWorkContent } from "./industry-work";
import { yaseenInfobox } from "./profile-infobox";
import { papersSection } from "./papers";

const companies = industryWorkContent.sections.reduce<ContentSection[]>((entries, section) => {
  const [role, company] = section.title.split(" - ");
  const roleSection: ContentSection = {
    ...section,
    id: section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    title: role,
    image: undefined,
  };
  const existingCompany = entries.find((entry) => entry.title === company);
  if (existingCompany) {
    existingCompany.subsections!.push(roleSection);
  } else {
    entries.push({
      title: company,
      image: section.image ? { ...section.image, caption: company, captionUrl: section.websiteUrl } : undefined,
      subsections: [roleSection],
    });
  }
  return entries;
}, []);

export const careerContent: JSONContent = {
  title: "Career",
  description: "Engineering experience in SoC design, MMIO microarchitecture, SSD controller RTL and block-level verification, systems integration, and embedded firmware",
  url: "/career",
  disambiguation: "This article covers the career of [Yaseen Alkhameri](/). For independent projects, see [Yaseen Alkhameri (Projects)](/projects).",
  infobox: yaseenInfobox,
  infoboxTitle: "Yaseen Alkhameri",
  sections: [{
    id: "employment",
    title: "Employment",
    group: "employment",
    subsections: companies,
  }, papersSection],
};
