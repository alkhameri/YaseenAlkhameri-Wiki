import React from "react";

export enum ImagePosition {
  LEFT = "left",
  RIGHT = "right",
}

export interface RoleFocusItem {
  role: string;
  statement: string;
  seeAlso: { href: string; label: string };
}

export interface InfoboxSocialLink {
  platform: "linkedin" | "github" | "youtube";
  href: string;
  label: string;
}

export interface ArticleNavItem {
  href: string;
  label: string;
  depth: number;
}

export interface SectionActionLink {
  href: string;
  label: string;
}

export function slugify(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function sectionId(section: ContentSection): string {
  return section.id || slugify(section.title);
}

export function splitCommaList(value?: string, limit?: number): string[] {
  const items = (value ?? "").split(",").map((item) => item.trim()).filter(Boolean);
  return typeof limit === "number" ? items.slice(0, limit) : items;
}

export function sectionActionLinks(section: ContentSection): SectionActionLink[] {
  const links: SectionActionLink[] = [];
  if (section.websiteUrl) links.push({ href: section.websiteUrl, label: "Website" });
  if (section.githubUrl) links.push({ href: section.githubUrl, label: "GitHub" });
  if (section.image?.link) links.push({ href: section.image.link, label: "View" });
  return links;
}

export function getArticleNavigation(content: JSONContent, maxDepth = 1): ArticleNavItem[] {
  const links: ArticleNavItem[] = [];
  function visit(sections: ContentSection[], depth: number) {
    if (depth > maxDepth) return;
    for (const section of sections) {
      if (!section.hideFromArticleNav && section.title.trim()) {
        links.push({ href: `#${sectionId(section)}`, label: section.title, depth });
      }
      if (section.subsections) visit(section.subsections, depth + 1);
    }
  }
  visit(content.sections, 0);
  return links;
}

export interface ContentSection {
  id?: string;
  title: string;
  group?: string;
  variant?: "home-role-focus" | "home-activity-grid";
  hideFromArticleNav?: boolean;
  roleFocusItems?: RoleFocusItem[];
  venue?: string;
  date?: string;
  description?: React.ReactNode;
  technologies?: string;
  githubUrl?: string;
  websiteUrl?: string;
  image?: {
    src: string;
    alt: string;
    caption?: string;
    captionUrl?: string;
    position: ImagePosition;
    link?: string;
  };
  subsections?: ContentSection[];
}

export interface InfoboxField {
  label: string;
  value: string;
}

export interface Infobox {
  image?: string;
  imageCaption?: string;
  email?: string;
  socialLinks?: InfoboxSocialLink[];
  fields: InfoboxField[];
}

export interface JSONContent {
  title: string;
  subtitle?: string;
  description: string;
  url: string;
  disambiguation?: string;
  infobox?: Infobox;
  infoboxTitle?: string;
  sections: ContentSection[];
}

const CONTENT_LOADERS: Record<string, () => Promise<JSONContent>> = {
  home: () => import("../content/home").then((m) => m.homeContent),
  career: () => import("../content/career").then((m) => m.careerContent),
  projects: () => import("../content/projects").then((m) => m.projectsContent),
  blog: () => import("../content/blog").then((m) => m.blogContent),
  contact: () => import("../content/contact").then((m) => m.contactContent),
  ama: () => import("../content/ama").then((m) => m.amaContent),
};

export async function getJSONContent(slug: string): Promise<JSONContent> {
  const loader = CONTENT_LOADERS[slug];
  if (!loader) {
    throw new Error(`Content file not found: ${slug}`);
  }
  return loader();
}

export async function getAllJSONContent(): Promise<
  Record<string, JSONContent>
> {
  const allContent: Record<string, JSONContent> = {};

  for (const slug of Object.keys(CONTENT_LOADERS)) {
    allContent[slug] = await getJSONContent(slug);
  }

  return allContent;
}

function reactNodeToText(node: React.ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(reactNodeToText).join(" ");
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return reactNodeToText(node.props.children);
  }
  return "";
}

export function extractSearchableText(content: JSONContent): string {
  let text =
    content.title +
    " " +
    (content.subtitle || "") +
    " " +
    content.description +
    " ";

  if (content.disambiguation) {
    text += content.disambiguation + " ";
  }

  if (content.infobox) {
    content.infobox.fields.forEach((field) => {
      text += field.label + " " + field.value + " ";
    });
  }

  function extractFromSections(sections: ContentSection[]): string {
    let sectionText = "";
    sections.forEach((section) => {
      sectionText += section.title + " ";

      sectionText += reactNodeToText(section.description) + " ";
      if (section.technologies) {
        sectionText += section.technologies + " ";
      }

      if (section.subsections) {
        sectionText += extractFromSections(section.subsections);
      }
    });
    return sectionText;
  }

  text += extractFromSections(content.sections);

  return text;
}

export function extractSections(
  content: JSONContent,
): Array<{ id: string; title: string; content: string; url: string }> {
  const sections: Array<{
    id: string;
    title: string;
    content: string;
    url: string;
  }> = [];

  function processSections(
    sectionList: ContentSection[],
    parentTitle?: string,
  ) {
    sectionList.forEach((section) => {
      const fullTitle = parentTitle
        ? `${parentTitle} > ${section.title}`
        : section.title;
      const id = sectionId(section);
      if (!section.title.trim()) return;

      let sectionContent = reactNodeToText(section.description) + " ";
      if (section.technologies) {
        sectionContent += section.technologies + " ";
      }

      sections.push({
        id,
        title: fullTitle,
        content: sectionContent.trim(),
        url: content.url,
      });

      if (section.subsections) {
        processSections(section.subsections, fullTitle);
      }
    });
  }

  processSections(content.sections);
  return sections;
}
