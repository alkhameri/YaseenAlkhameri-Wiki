import { JSONContent } from "@/lib/json-content";

// User requested to remove research work — keep a minimal placeholder so the
// route remains valid and the site doesn't throw for a missing module.
export const researchContent: JSONContent = {
  title: "Research",
  subtitle: "No research to display",
  description: "No research work is listed for this profile.",
  url: "/research",
  disambiguation: "This page intentionally left blank.",
  sections: [],
};
