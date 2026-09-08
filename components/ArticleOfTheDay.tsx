"use client";

import { useEffect, useState } from "react";
import { pacificDisplayDate, type DailyArticle } from "@/lib/wiki-banner/articles";

export default function ArticleOfTheDay() {
  const [article, setArticle] = useState<DailyArticle | null>(null);

  useEffect(() => {
    let disposed = false;
    let loadedDate = "";
    let inFlight = false;
    const controller = new AbortController();
    async function refresh() {
      if (inFlight) return;
      inFlight = true;
      try {
        const response = await fetch("/api/wiki-banner", { cache: "no-store", signal: controller.signal });
        if (!response.ok) return;
        const nextArticle: DailyArticle = await response.json();
        if (!disposed) {
          loadedDate = nextArticle.displayDate;
          setArticle(nextArticle);
        }
      } catch {
        // Keep the current link if a refresh fails; retry on focus or the next tick.
      } finally {
        inFlight = false;
      }
    }
    function onVisibility() {
      if (document.visibilityState === "visible") void refresh();
    }
    void refresh();
    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible" && loadedDate !== pacificDisplayDate()) void refresh();
    }, 30_000);
    window.addEventListener("focus", refresh);
    window.addEventListener("wiki-banner-updated", refresh);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      disposed = true;
      controller.abort();
      window.clearInterval(timer);
      window.removeEventListener("focus", refresh);
      window.removeEventListener("wiki-banner-updated", refresh);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="min-w-0" aria-label="Article of the day">
      <div className="flex flex-wrap items-baseline gap-x-1.5 text-sm sm:text-base">
        <span className="shrink-0 font-serif text-[#202122]">Article of the day:</span>
        {article ? (
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="min-w-0 break-words" title={`Read ${article.title} on Wikipedia`}>
            {article.title}
          </a>
        ) : <span className="text-sm text-gray-500">Loading…</span>}
      </div>
      <p className="mt-0.5 text-[11px] italic text-gray-500">Yaseen&apos;s picks · From Wikipedia</p>
    </div>
  );
}
