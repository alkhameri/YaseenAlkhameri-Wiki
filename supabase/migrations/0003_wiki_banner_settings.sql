-- The singleton preserves list order and updates the entire rotation atomically.
create table if not exists public.wiki_banner_settings (
  id boolean primary key default true check (id),
  articles jsonb not null check (
    jsonb_typeof(articles) = 'array' and jsonb_array_length(articles) between 1 and 100
  ),
  start_date date not null,
  updated_at timestamptz not null default now()
);

alter table public.wiki_banner_settings enable row level security;
revoke all on public.wiki_banner_settings from anon, authenticated;
grant select, insert, update on public.wiki_banner_settings to service_role;

-- Keep these defaults in sync with content/wiki-articles.json.
-- Re-running the migration leaves any list saved in the admin editor intact.
insert into public.wiki_banner_settings (id, articles, start_date)
values (true, '[
  "https://en.wikipedia.org/wiki/Telegraph_Avenue",
  "https://en.wikipedia.org/wiki/High_Bandwidth_Memory",
  "https://en.wikipedia.org/wiki/Reduced_instruction_set_computer",
  "https://en.wikipedia.org/wiki/Cheese_Board_Collective",
  "https://en.wikipedia.org/wiki/Silicon_Valley",
  "https://en.wikipedia.org/wiki/181_Fremont",
  "https://en.wikipedia.org/wiki/Oakland_Tribune"
]'::jsonb, '2026-09-08')
on conflict (id) do nothing;
