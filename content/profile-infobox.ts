import type { Infobox } from "@/lib/json-content";

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
    { label: "Position", value: "Product Development Engineering Intern\nJune – September 2026" },
    { label: "Institution", value: "[Solidigm](https://www.solidigm.com/)" },
    { label: "Education", value: "B.S. Computer Engineering\n[University of California, Davis](https://www.ucdavis.edu/)\nExpected December 2026" },
    { label: "Born", value: "May 25, 2004\nOakland, California, U.S." },
  ],
};
