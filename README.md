# YaseenAlkhameri Wiki

This repository is a personal portfolio and knowledge base for Yaseen
Alkhameri. It highlights digital systems and hardware work including a
five-stage RISC-V core implemented as a SKY130A hard macro, FPGA prototyping
notes, and RTL/gate-level simulation evidence. The current core's OpenLane
flow closes timing at 16.67 MHz across nine PVT/RC corners with zero reported
DRC errors and GDS-based LVS mismatches. The career page covers MMIO microarchitecture,
RTL development, and block-level verification at Solidigm.

The project image, `public/rv32-core-sky130-classic.png`, is a KLayout rendering
of that core's final GDS, with green/blue/gold layers, diagonal hatching, and
macro pin labels. Its source GDS SHA-256 is
`0b37b5178984bf61dfd3ee2e8bb3617ae99c2ee75006a42bee380a3042fdace6`.
The older `public/GDSLayout.png` remains available at its original URL.

## Development

Run `npm ci`, then `npm run dev`. Use `npm run typecheck`, `npm test`, and
`npm run build` to verify changes.

## Article of the day

The header cycles through the eleven Wikipedia articles in
`content/wiki-articles.json`, once per calendar day in `America/Los_Angeles`.
The defaults work without a database or a Wikipedia API request.

To enable editing, configure the Supabase and admin variables documented in
`.env.example`, and apply `supabase/migrations/0003_wiki_banner_settings.sql`
to the site's Supabase database. This adds one settings table and does not
change existing analytics data. Re-running it preserves saved articles.

The four additions from November 2, 2026 (MacArthur Maze, Apple silicon,
Nintendo DSi, and MissingNo.) were also appended to the saved production list.
For another existing database, run
`npx tsx scripts/append-wiki-articles-2026-11-02.ts` with Supabase variables set
to preview that update, then add `--apply` to save. The command preserves
existing entries, their order, and the start date, and rejects concurrent
edits. It does not run on subsequent builds, so admin edits remain authoritative.

Sign in at `/admin`, then select **Article of the day** (`/admin/banner`).
Paste one English Wikipedia URL or article title per line. Reorder, add, or
remove lines and save. Saving makes the first article today's pick and the
remaining articles follow in order at midnight Pacific, repeating at the end.
The form rejects empty lists, duplicates, and non-Wikipedia URLs. Changes are
saved atomically in Supabase and survive deployments.

The public header uses the default rotation if the database is unavailable;
the editor reports connection/setup errors without overwriting the saved list.
The banner and short career descriptions were adapted from the current
[AneeshKumar-Wiki](https://github.com/aneesh6214/AneeshKumar-Wiki) design.

## Wiki layout and AMA

The public layout follows the upstream wiki's fixed header, Pages and This
Article sidebar, profile infobox, project catalogue, and career timeline.
`/career` includes the existing professional experience; `/industry-work`
permanently redirects there, preserving old links. Existing projects, blog,
contact information, and collections remain available.

Apply `supabase/migrations/0004_ama_questions.sql` to enable `/ama`. Visitors
can submit anonymous questions. Sign in and open `/admin/ama` to publish or
edit answers and archive questions. Unanswered and archived questions are
never included in the public archive. Archiving retains the database row.
The admin page and each moderation action verify the administrator session.
Both pages display an unavailable/setup message if Supabase is not ready.

## Papers

The Papers section of `/career` uses the catalogue in `content/papers.ts`.
There is no standalone Papers page or Pages-menu entry; old `/papers` links
redirect to `/career#papers`, while PDF URLs remain unchanged.
The layout adapts the upstream publications table, but
explicitly labels working papers and unpublished reports, without implying peer review.
Author order follows the PDFs. MOESI-D is listed first alongside the earlier
cache-coherence study; both are featured and linked from the home overview.
The Systems panel links to the full catalogue. Titles, summaries, authors,
and topics are searchable. The MOESI-D PDF is the cited version downloaded
from Overleaf, including attribution to the earlier SpMV/graph study.

The original documents supplied in the local `papers/` folder are preserved.
Their public copies live in `public/papers/` with stable, readable filenames;
these static PDFs are deployed with the site and require no Supabase setup.
To add another paper, place its PDF in `public/papers/` and add an entry to
`content/papers.ts`, retaining an accurate publication status. Do not describe
proposed future work as an implemented result.
