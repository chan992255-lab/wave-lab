import { Eye, MessagesSquare, Rocket } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const steps = [
  {
    icon: MessagesSquare,
    title: '간단 상담 & 견적',
    body: '어떤 가게·서비스인지, 꼭 필요한 기능이 무엇인지 5분이면 충분합니다. 범위와 기간, 금액을 먼저 정리해 드립니다.',
    meta: '문의 후 24시간 내 회신',
  },
  {
    icon: Eye,
    title: '라이브 미리보기 확인',
    body: '실제로 열리는 주소에서 바로 확인하시고, 문구·색·기능을 그 자리에서 요청하실 수 있습니다.',
    meta: '수정은 미리보기에서 바로',
  },
  {
    icon: Rocket,
    title: '수정 반영 & 정식 배포',
    body: '요청을 반영한 뒤 정식 주소로 배포합니다. 도메인 연결과 홈 화면 설치(PWA)까지 세팅해 드립니다.',
    meta: '배포 후에도 1회 무상 점검',
  },
];

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-20 overflow-hidden border-t border-white/[0.06] py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="세 단계면 끝납니다."
            description="복잡한 계약서나 긴 회의 없이, 대화하면서 바로 만들고 바로 확인합니다."
          />
        </Reveal>

        <div className="relative mt-12">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[26px] hidden h-px bg-gradient-to-r from-transparent via-white/12 to-transparent lg:block"
            aria-hidden="true"
          />
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 110}>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-surf p-3.5 shadow-card">
                      <step.icon className="h-5 w-5 text-iris" />
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.25em] text-sub">
                      STEP 0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-ink">{step.title}</h3>
                  <p className="mt-2.5 text-[13px] leading-[1.75] text-sub">{step.body}</p>
                  <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-[10.5px] text-ink/70">
                    <span className="h-1 w-1 rounded-full bg-mint" />
                    {step.meta}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
