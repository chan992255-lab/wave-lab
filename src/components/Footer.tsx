import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { brand, nav } from '../config/brand';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#08080C]">
      <div className="container-page py-12 sm:py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Logo size="sm" />
            <p className="mt-4 text-[12.5px] leading-[1.8] text-sub">
              {brand.description}
              <br />
              기획 · 디자인 · 웹앱 제작 · 배포까지 한 팀처럼 움직입니다.
            </p>
          </div>

          <div className="flex gap-12 sm:gap-16">
            <div>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-sub/80">바로가기</p>
              <ul className="mt-3 space-y-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-[12.5px] text-ink/75 transition-colors hover:text-ink">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-sub/80">시작하기</p>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href="#inquiry"
                    className="inline-flex items-center gap-1 text-[12.5px] text-ink/75 transition-colors hover:text-ink"
                  >
                    제작 문의하기
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="#work" className="text-[12.5px] text-ink/75 transition-colors hover:text-ink">
                    라이브 프로젝트 6종
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-[12.5px] text-ink/75 transition-colors hover:text-ink">
                    패키지 · 가격
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row sm:items-center">
          <p className="text-[11px] text-sub/80">
            © {brand.year} {brand.name}. 모든 작업물의 저작권은 제작 완료 후 의뢰인에게 있습니다.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-sub transition-colors hover:border-white/20 hover:text-ink"
          >
            맨 위로
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
