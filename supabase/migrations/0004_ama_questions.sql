-- Public questions stay private until an administrator publishes an answer.
create table if not exists public.ama_questions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  question text not null check (char_length(trim(question)) between 1 and 1000),
  answer text check (answer is null or char_length(trim(answer)) between 1 and 5000),
  answered_at timestamptz,
  archived_at timestamptz
);

create index if not exists ama_questions_created_at_idx on public.ama_questions (created_at desc);
create index if not exists ama_questions_answered_at_idx on public.ama_questions (answered_at desc)
  where answer is not null and archived_at is null;

alter table public.ama_questions enable row level security;
revoke all on public.ama_questions from anon, authenticated;
grant select, insert, update on public.ama_questions to service_role;
