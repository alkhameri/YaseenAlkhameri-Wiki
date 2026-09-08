import defaultArticles from "../../content/wiki-articles.json";

export interface ArticleRotation {
  articles: string[];
  startDate: string;
}

export interface DailyArticle {
  title: string;
  url: string;
  displayDate: string;
}

export const DEFAULT_ROTATION: ArticleRotation = {
  articles: defaultArticles,
  startDate: "2026-09-08",
};

const pacificDateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Los_Angeles",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export function pacificDisplayDate(now = new Date()): string {
  const parts = pacificDateFormatter.formatToParts(now);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}-${values.month}-${values.day}`;
}

export function parseWikipediaArticle(input: string): string {
  let title = input.trim();
  if (!title) throw new Error("Enter a Wikipedia article title or URL.");

  if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(title)) {
    let url: URL;
    try {
      url = new URL(title);
    } catch {
      throw new Error("Enter a valid Wikipedia article URL.");
    }
    if (
      !["https:", "http:"].includes(url.protocol) ||
      !["en.wikipedia.org", "en.m.wikipedia.org"].includes(url.hostname) ||
      url.port || url.username || url.password ||
      !url.pathname.startsWith("/wiki/")
    ) {
      throw new Error("Use an English Wikipedia article URL, such as https://en.wikipedia.org/wiki/Telegraph_Avenue.");
    }
    try {
      title = decodeURIComponent(url.pathname.slice(6));
    } catch {
      throw new Error("The article URL contains invalid characters.");
    }
  }

  title = title.trim().replace(/[\s_]+/g, "_");
  if (
    !title || title.length > 255 ||
    /[\u0000-\u001f\u007f<>\[\]{}|#?\\]/.test(title) ||
    title.startsWith("/") || title === "." || title === ".." ||
    /^(?:Special|Talk|User|User_talk|Wikipedia|File|Media|MediaWiki|Template|Help|Category|Portal|Draft|Module):/i.test(title)
  ) {
    throw new Error("Enter an article title, not a Wikipedia tool, category, or discussion page.");
  }
  title = title.charAt(0).toUpperCase() + title.slice(1);
  return `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`;
}

export function parseArticleList(input: string): string[] {
  const lines = input.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  if (!lines.length || lines.length > 100) {
    throw new Error("Include between 1 and 100 articles, one per line.");
  }
  const articles = lines.map((line, index) => {
    try {
      return parseWikipediaArticle(line);
    } catch (error) {
      throw new Error(`Line ${index + 1}: ${(error as Error).message}`);
    }
  });
  if (new Set(articles).size !== articles.length) {
    throw new Error("Each article should appear only once. Remove duplicate entries before saving.");
  }
  return articles;
}

export function articleTitle(url: string): string {
  return decodeURIComponent(new URL(url).pathname.slice(6)).replace(/_/g, " ");
}

export function getDailyArticle(rotation: ArticleRotation, now = new Date()): DailyArticle {
  if (!rotation.articles.length) throw new Error("The article list is empty.");
  const displayDate = pacificDisplayDate(now);
  // Calendar dates, rather than elapsed local hours, keep DST days in sequence.
  const elapsedDays = Math.round(
    (Date.parse(`${displayDate}T00:00:00Z`) - Date.parse(`${rotation.startDate}T00:00:00Z`)) / 86_400_000,
  );
  const index = ((elapsedDays % rotation.articles.length) + rotation.articles.length) % rotation.articles.length;
  const url = rotation.articles[index];
  return { title: articleTitle(url), url, displayDate };
}
