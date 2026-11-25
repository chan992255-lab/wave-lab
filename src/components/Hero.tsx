import { ArrowRight, ArrowUpRight, Globe2, Smartphone, Sparkles, Timer } from 'lucide-react';

const stats = [
  { icon: Globe2, label: '실제 운영 중인 라이브 프로젝트', value: '6종' },
  { icon: Timer, label: '평균 제작 기간', value: '1~4일' },
  { icon: Smartphone, label: '모바일 · 데스크톱 대응', value: '100%' },
];

const bars = [38, 52, 44, 68, 57, 82, 74];

function HeroMock() {
  return (
    <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none">
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.28),transparent)] blur-2xl" />

      <div className="card-edge rounded-[26px] p-1.5 shadow-card">
        <div className="overflow-hidden rounded-[20px] bg-[#0C0C12]">
          {/* 브라우저 크롬 */}
          <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/80" />
            <span className="ml-2 flex-1 truncate rounded-md bg-white/[0.05] px-2.5 py-1 text-[10px] text-sub">
              your-brand.com
            </span>
          </div>

          <div className="space-y-4 p-4 sm:p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-sub">이번 주 예약</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight text-ink">
                  24<span className="ml-1 text-xs font-medium text-mint">+18%</span>
                </p>
              </div>
              <span className="rounded-full border border-emerald/25 bg-emerald/10 px-2.5 py-1 text-[10px] font-medium text-mint">
                실시간
              </span>
            </div>

            <div className="flex h-[92px] items-end gap-2 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3">
              {bars.map((h, i) => (
                <div key={i} className="flex-1">
                  <div
                    className="w-full rounded-t-[3px] bg-gradient-to-t from-indigo/30 to-sky/80"
                    style={{ height: `${h}px`, opacity: 0.55 + i * 0.06 }}
                  />
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {[
                ['오전 10:30', '컷 · 김서연', '확정'],
                ['오후 1:00', '펌 · 이도현', '확정'],
                ['오후 4:30', '염색 · 박지우', '대기'],
              ].map(([time, who, state]) => (
                <div
                  key={who}
                  className="flex items-center gap-3 rounded-lg border border-white/[0.05] bg-white/[0.02] px-3 py-2"
                >
                  <span className="font-mono text-[10px] text-sub">{time}</span>
                  <span className="flex-1 truncate text-[11px] text-ink/85">{who}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[9px] ${
                      state === '확정' ? 'bg-emerald/15 text-mint' : 'bg-white/[0.06] text-sub'
                    }`}
                  >
                    {state}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -left-4 top-24 hidden animate-drift rounded-xl border border-white/10 bg-[#12121A]/95 px-3 py-2 shadow-card backdrop-blur sm:block">
        <p className="flex items-center gap-1.5 text-[10.5px] font-medium text-ink/90">
          <Smartphone className="h-3.5 w-3.5 text-sky" />
          홈 화면에 앱처럼 설치
        </p>
      </div>

      <div
        className="absolute -right-3 bottom-14 hidden animate-drift rounded-xl border border-white/10 bg-[#12121A]/95 px-3 py-2 shadow-card backdrop-blur sm:block"
        style={{ animationDelay: '2.4s' }}
      >
        <p className="flex items-center gap-1.5 text-[10.5px] font-medium text-ink/90">
          <Sparkles className="h-3.5 w-3.5 text-mint" />
          기획 · 디자인 · 배포 한 번에
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-[-14rem] -z-10 h-[34rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.22),transparent)] blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-8rem] top-[16rem] -z-10 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(closest-side,rgba(16,185,129,0.14),transparent)] blur-2xl"
        aria-hidden="true"
      />

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10">
          <div>
            <div className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
              </span>
              <span className="text-[11.5px] font-medium tracking-wide text-ink/80">
                라이브 프로젝트 6종 · 지금 운영 중
              </span>
            </div>

            <h1 className="mt-6 animate-fade-up text-[2.55rem] font-bold leading-[1.14] tracking-[-0.03em] text-ink [animation-delay:80ms] sm:text-[3.6rem] sm:leading-[1.08]">
              아이디어만 주시면
              <br />
              <span className="text-gradient">웹앱은 완성해서</span>
              <br />
              드립니다.
            </h1>

            <p className="mt-6 max-w-xl animate-fade-up text-[15px] leading-[1.75] text-sub [animation-delay:160ms] sm:text-[16.5px]">
              소상공인 · 브랜드 · 헬스장 · 크리에이터 · 스타트업을 위한 웹 제작 스튜디오입니다.
              기획과 디자인, 모바일 최적화 웹앱 제작, 배포까지 <span className="text-ink/85">한 번에</span> 끝내드립니다.
            </p>

            <div className="mt-9 flex animate-fade-up flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:items-center">
              <a
                href="#inquiry"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo via-blue to-sky px-6 py-3.5 text-[14.5px] font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
              >
                제작 문의하기
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-6 py-3.5 text-[14.5px] font-semibold text-ink transition-colors hover:border-white/20 hover:bg-white/[0.06]"
              >
                포트폴리오 보기
                <ArrowUpRight className="h-4 w-4 text-sub" />
              </a>
            </div>

            <dl className="mt-12 grid animate-fade-up grid-cols-3 gap-4 border-t border-white/[0.07] pt-6 [animation-delay:320ms]">
              {stats.map(({ icon: Icon, label, value }) => (
                <div key={label}>
                  <dt className="flex items-center gap-1.5 text-[10.5px] leading-tight text-sub">
                    <Icon className="h-3.5 w-3.5 shrink-0 text-indigo/80" />
                    <span className="truncate">{label}</span>
                  </dt>
                  <dd className="mt-1.5 text-[17px] font-semibold tracking-tight text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-fade-in [animation-delay:200ms]">
            <HeroMock />
          </div>
        </div>
      </div>
    </section>
  );
}
