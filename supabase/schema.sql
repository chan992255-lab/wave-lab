-- 웨이브 랩(Wave Lab) 제작 문의 테이블
-- 기존 Supabase 프로젝트(study-pick, ref: cwiftbtyfndnthzuutrx)의 public 스키마를 재사용하므로
-- 객체 이름에 wavelab_ 접두사를 붙여 다른 앱과 분리한다. 재실행 안전(idempotent).

create table if not exists public.wavelab_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  contact text not null,
  package text,
  message text not null,
  source text default 'wave-lab-site',
  created_at timestamptz not null default now()
);

alter table public.wavelab_inquiries enable row level security;

-- 접수(INSERT)만 허용. SELECT 정책을 만들지 않아 접수 내용은 외부에서 조회할 수 없다.
drop policy if exists wavelab_inquiries_insert on public.wavelab_inquiries;
create policy wavelab_inquiries_insert on public.wavelab_inquiries
  for insert to anon, authenticated with check (true);

grant insert on public.wavelab_inquiries to anon, authenticated;

notify pgrst, 'reload schema';
