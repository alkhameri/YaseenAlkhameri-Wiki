import type { JSONContent } from "@/lib/json-content";
import { industryWorkContent } from "./industry-work";
import { yaseenInfobox } from "./profile-infobox";

export const careerContent: JSONContent = {
  title: "Career",
  description: "Engineering experience in SSD systems integration and embedded firmware",
  url: "/career",
  disambiguation: "This article covers the career of [Yaseen Alkhameri](/). For independent projects, see [Yaseen Alkhameri (Projects)](/projects).",
  infobox: yaseenInfobox,
  infoboxTitle: "Yaseen Alkhameri",
  sections: [{
    id: "employment",
    title: "Employment",
    group: "employment",
    subsections: industryWorkContent.sections.map((section) => {
      const [role, company] = section.title.split(" - ");
      return {
        title: company,
        date: section.date,
        image: section.image ? { ...section.image, caption: company, captionUrl: section.websiteUrl } : undefined,
        subsections: [{
          ...section,
          id: section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
          title: role,
          image: undefined,
        }],
      };
    }),
  }],
};
