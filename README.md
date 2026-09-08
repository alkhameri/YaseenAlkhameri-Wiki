# YaseenAlkhameri Wiki

This repository is a personal portfolio and knowledge base for Yaseen
Alkhameri. It highlights digital systems and hardware work including a
compact RISC‑V core (Verilog RTL), FPGA prototyping notes, verification
artifacts (ModelSim/Verilator), and an OpenLane flow for GDS generation.

## Development

Run `npm ci`, then `npm run dev`. Use `npm run typecheck`, `npm test`, and
`npm run build` to verify changes.

## Article of the day

The header cycles through the seven Wikipedia articles in
`content/wiki-articles.json`, once per calendar day in `America/Los_Angeles`.
The defaults work without a database or a Wikipedia API request.

To enable editing, configure the Supabase and admin variables documented in
`.env.example`, and apply `supabase/migrations/0003_wiki_banner_settings.sql`
to the site's Supabase database. This adds one settings table and does not
change existing analytics data. Re-running it preserves saved articles.

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
contact information, education, skills, and collections remain available.

Apply `supabase/migrations/0004_ama_questions.sql` to enable `/ama`. Visitors
can submit anonymous questions. Sign in and open `/admin/ama` to publish or
edit answers and archive questions. Unanswered and archived questions are
never included in the public archive. Archiving retains the database row.
The admin page and each moderation action verify the administrator session.
Both pages display an unavailable/setup message if Supabase is not ready.
