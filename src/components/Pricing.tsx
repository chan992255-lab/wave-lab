import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { packageNotes, packages } from '../data/packages';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

export function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-20 border-t border-white/[0.06] py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[24rem] w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.12),transparent)] blur-2xl"
        aria-hidden="true"
      />
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Packages"
            align="center"
            title="필요한 만큼만, 투명한 가격으로."
            description="숨은 비용 없이 범위와 기간을 먼저 정하고 시작합니다. 아래 금액은 시작가이며, 상담에서 범위를 확정한 뒤 최종 견적을 드립니다."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i * 90} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl p-6 sm:p-7 ${
                  pkg.highlight
                    ? 'border border-indigo/40 bg-gradient-to-b from-indigo/[0.14] via-surf to-surf shadow-lift'
                    : 'card-edge'
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo to-blue px-3 py-1 text-[10.5px] font-semibold text-white shadow-glow">
                    <Sparkles className="h-3 w-3" />
                    {pkg.badge}
                  </span>
                )}

                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[16px] font-semibold tracking-tight text-ink">{pkg.name}</h3>
                  <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10.5px] text-sub">
                    {pkg.delivery}
                  </span>
                </div>
                <p className="mt-2 text-[12.5px] leading-relaxed text-sub">{pkg.summary}</p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-[30px] font-bold leading-none tracking-tight text-ink">
                    {pkg.price}
                  </span>
                  <span className="pb-1 text-[13px] font-medium text-sub">{pkg.priceNote}</span>
                </div>
                <p className="mt-1.5 text-[11px] text-sub/80">제작 기간 약 {pkg.delivery}</p>

                <ul className="mt-6 flex-1 space-y-2.5 border-t border-white/[0.07] pt-5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[12.5px] leading-snug text-ink/80">
                      <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-emerald/15">
                        <Check className="h-2.5 w-2.5 text-mint" strokeWidth={3.5} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#inquiry"
                  className={`mt-7 inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-[13px] font-semibold transition-transform hover:-translate-y-0.5 ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-indigo to-blue text-white shadow-glow'
                      : 'border border-white/12 bg-white/[0.04] text-ink hover:bg-white/[0.08]'
                  }`}
                >
                  이 패키지로 문의하기
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={60}>
          <ul className="mx-auto mt-8 flex max-w-4xl flex-col gap-2.5 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            {packageNotes.map((note) => (
              <li key={note} className="flex items-start gap-2 text-[11.5px] leading-relaxed text-sub">
                <Check className="mt-0.5 h-3 w-3 shrink-0 text-indigo/80" strokeWidth={3} />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
