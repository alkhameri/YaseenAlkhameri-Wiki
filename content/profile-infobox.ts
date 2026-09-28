import type { Infobox } from "@/lib/json-content";
import { currentRole } from "./current-role";

export const yaseenInfobox: Infobox = {
  image: "/profile-photo.png",
  imageCaption: "Yaseen Alkhameri in 2025",
  email: "yalkhameri@gmail.com",
  socialLinks: [
    { platform: "linkedin", href: "https://linkedin.com/in/yaseenalkhameri", label: "LinkedIn" },
    { platform: "github", href: "https://github.com/alkhameri", label: "GitHub" },
  ],
  fields: [
    { label: "Location", value: "San Francisco Bay Area" },
    { label: "Position", value: `${currentRole.title}\n${currentRole.dates}` },
    { label: "Institution", value: `[${currentRole.company}](${currentRole.websiteUrl})` },
    { label: "Education", value: "B.S. Computer Engineering\n[University of California, Davis](https://www.ucdavis.edu/)\nExpected December 2026" },
    { label: "Born", value: "May 25, 2004\nOakland, California, U.S." },
  ],
};
