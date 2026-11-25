# Wave Lab (웨이브 랩)

웹앱 제작 스튜디오 **웨이브 랩**의 포트폴리오 사이트입니다.
소상공인 · 브랜드 · 헬스장 · 크리에이터 · 스타트업을 대상으로 기획 · 디자인 · 모바일 최적화 제작 · 배포까지 한 번에 진행합니다.

- 라이브: <https://wavelab-kr.vercel.app>
- 스택: React 18 · Vite 5 · TypeScript · Tailwind CSS · lucide-react · Supabase
- 톤: 다크 에이전시 테마(`#0A0A0F` 배경, `#13131A` 카드, 인디고/블루/에메랄드 포인트)

## 구성

| 섹션 | 내용 |
| --- | --- |
| Hero | 대상 고객 소개, `제작 문의하기` / `포트폴리오 보기` CTA, 미리보기 목업 |
| Portfolio | 실제 운영 중인 라이브 프로젝트 6종 — 카테고리 · 한 줄 설명 · 핵심 구현 · 기술 태그 · `라이브 열기 ↗` |
| Packages | 라이트 랜딩 5만 원~ / 인터랙티브 웹앱 15만 원~ / 회원제·실시간 DB 30만 원~ |
| Process | 상담·견적 → 라이브 미리보기 → 수정·정식 배포 |
| Inquiry | 이름·연락처·희망 패키지·내용 → Supabase 저장, 실패 시 localStorage + 요약 복사 |

## 문의 접수

- 테이블: `public.wavelab_inquiries` (Supabase 프로젝트 재사용, `wavelab_` 접두사로 분리)
- 권한: anon/authenticated **INSERT만** 허용. SELECT 정책이 없어 접수 내용은 외부에서 조회되지 않습니다.
- 스키마: [`supabase/schema.sql`](supabase/schema.sql)
- 앱은 네트워크 실패 시에도 문의 내용을 `localStorage`에 남기고, 접수 완료 안내와 함께 요약 복사 버튼을 제공합니다.

## 개발

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # tsc --noEmit && vite build
```

## 배포

GitHub `main` 브랜치에 푸시하면 Vercel 프로젝트 `wave-lab`이 자동으로 운영 배포합니다.
도메인: `wavelab-kr.vercel.app` (프로젝트 기본 주소 `wave-lab-five.vercel.app`)

## 메모

- 브랜드 이름·표기는 `src/config/brand.ts` 한 곳에서 관리합니다.
- `/__mobile.html` 은 390×844 모바일 화면 캡처용 내부 페이지입니다(`noindex`).
