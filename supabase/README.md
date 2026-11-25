# 웨이브 랩 문의 테이블

`supabase/schema.sql` 하나로 기존 Supabase 프로젝트(`cwiftbtyfndnthzuutrx`, 스터디픽·라이어픽과 공용)에
`wavelab_` 접두사 객체만 만든다. 재실행해도 안전하다.

| 테이블 | 내용 | anon 권한 |
| --- | --- | --- |
| `wavelab_inquiries` | 제작 문의(이름·연락처·패키지·내용·유입경로·시각) | INSERT만 |

- RLS 켜짐, 정책은 INSERT 하나뿐이라 anon은 접수만 할 수 있고 목록은 읽을 수 없다.
- 적용: Supabase 대시보드 → SQL Editor에서 `schema.sql` 실행 후 `notify pgrst, 'reload schema';`까지 함께 실행.
