import { ArrowUpRight, Check } from 'lucide-react';
import { projects } from '../data/portfolio';
import { PreviewArt } from './PreviewArt';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Work() {
  return (
    <section id="work" className="relative scroll-mt-20 border-t border-white/[0.06] py-20 sm:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Portfolio"
              title={
                <>
                  말이 아니라,
                  <br className="hidden sm:block" /> 실제로 열리는 사이트로 보여드립니다.
                </>
              }
              description="직접 기획하고 제작해 지금 운영 중인 프로젝트 6종입니다. 카드의 라이브 열기 버튼을 누르면 실제 서비스가 새 탭에서 열립니다."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              <span className="text-[11.5px] font-medium text-ink/75">6개 모두 라이브 · 무료 호스팅</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.nameEn} delay={(i % 2) * 90} className="h-full">
              <article className="group card-edge flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative h-[176px] overflow-hidden">
                  <PreviewArt kind={p.kind} from={p.accent.from} to={p.accent.to} />
                  <div className="absolute inset-x-4 top-4 flex items-start justify-between">
                    <span className={`rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[10.5px] font-medium backdrop-blur-md ${p.accent.chip}`}>
                      {p.category}
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-white/35">
                      0{i + 1}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-[19px] font-semibold tracking-tight text-ink">{p.nameKo}</h3>
                    <span className="font-mono text-[11.5px] uppercase tracking-wide text-sub">{p.nameEn}</span>
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-sub">{p.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[12.5px] leading-snug text-ink/75">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mint/80" strokeWidth={3} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 text-[10.5px] text-sub"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-5 flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[13px] font-semibold text-ink transition-colors group-hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                      라이브 열기
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-sub transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <p className="mt-8 text-center text-[12.5px] leading-relaxed text-sub">
            모든 프로젝트는 모바일 화면을 기준으로 먼저 설계하고, 데스크톱까지 반응형으로 확장했습니다.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
