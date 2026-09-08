"use client";

import { useState, type FormEvent } from "react";
import { articleTitle, type ArticleRotation, type DailyArticle } from "@/lib/wiki-banner/articles";

interface Props {
  rotation: ArticleRotation;
  today: DailyArticle;
  setupMessage?: string;
}

export default function ArticleRotationEditor({ rotation, today: initialToday, setupMessage }: Props) {
  const [saved, setSaved] = useState(rotation.articles.join("\n"));
  const [value, setValue] = useState(saved);
  const [articles, setArticles] = useState(rotation.articles);
  const [today, setToday] = useState(initialToday);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const dirty = value !== saved;

  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setStatus("");
    setError("");
    try {
      const response = await fetch("/api/admin/wiki-banner", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ articles: value }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "The article list could not be saved.");
      const nextRotation: ArticleRotation = data.rotation;
      const nextValue = nextRotation.articles.join("\n");
      setSaved(nextValue);
      setValue(nextValue);
      setArticles(nextRotation.articles);
      setToday(data.today);
      setStatus("Saved. The first article is now featured today.");
      window.dispatchEvent(new Event("wiki-banner-updated"));
    } catch (error) {
      setError(error instanceof Error ? error.message : "The article list could not be saved.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6 text-sm">
      {setupMessage && <p role="alert" className="border border-amber-300 bg-amber-50 p-4 text-amber-950">{setupMessage}</p>}
      <div className="border border-gray-300 bg-gray-50 p-4">
        <h2 className="mb-1 font-serif text-xl">Today&apos;s article</h2>
        <a href={today.url} target="_blank" rel="noopener noreferrer">{today.title}</a>
        <p className="mt-1 text-xs text-gray-600">{today.displayDate} · Pacific time</p>
      </div>

      <form onSubmit={save} className="space-y-3">
        <label htmlFor="article-list" className="block font-serif text-xl">Edit the rotation</label>
        <p id="article-list-help" className="leading-relaxed text-gray-600">
          Paste one English Wikipedia article title or URL per line. Add, remove, or reorder lines to change the list.
          Saving starts the rotation with the first article today; the next appears at midnight Pacific.
          After the last article, the list repeats.
        </p>
        <textarea
          id="article-list"
          name="articles"
          aria-describedby="article-list-help"
          value={value}
          onChange={(event) => { setValue(event.target.value); setStatus(""); setError(""); }}
          rows={10}
          maxLength={100_000}
          spellCheck={false}
          required
          disabled={saving || Boolean(setupMessage)}
          className="block w-full resize-y border border-gray-400 bg-white p-3 font-mono text-sm leading-7 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:bg-gray-50"
        />
        <div className="flex flex-wrap items-center gap-4">
          <button type="submit" disabled={saving || !dirty || Boolean(setupMessage)} className="border border-blue-700 bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-200 disabled:text-gray-500">
            {saving ? "Saving…" : "Save article list"}
          </button>
          <button type="button" disabled={saving || !dirty} onClick={() => { setValue(saved); setError(""); setStatus(""); }} className="text-blue-700 hover:underline disabled:text-gray-400">
            Discard edits
          </button>
          {dirty && <span className="text-gray-600">Unsaved changes</span>}
        </div>
        <p role="status" className="text-green-800">{status}</p>
        {error && <p role="alert" className="text-red-800">{error}</p>}
      </form>

      <section aria-labelledby="saved-rotation-heading">
        <h2 id="saved-rotation-heading" className="border-b border-gray-300 pb-1 font-serif text-xl">Saved rotation · {articles.length} articles</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-6">
          {articles.map((url) => (
            <li key={url}>
              <a href={url} target="_blank" rel="noopener noreferrer">{articleTitle(url)}</a>
              {url === today.url && <span className="ml-2 text-xs text-gray-500">Today</span>}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
