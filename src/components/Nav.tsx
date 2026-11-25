import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { nav } from '../config/brand';
import { Logo } from './Logo';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-white/[0.06] bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-[68px] items-center justify-between">
        <a href="#top" className="shrink-0" aria-label="맨 위로">
          <Logo size="sm" />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="주요 섹션">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-[13.5px] font-medium text-sub transition-colors hover:bg-white/[0.05] hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#inquiry"
            className="group hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-[13px] font-semibold text-[#0A0A0F] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            제작 문의하기
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-ink md:hidden"
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-bg/95 backdrop-blur-xl md:hidden">
          <nav className="container-page flex flex-col py-3" aria-label="모바일 메뉴">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/[0.04] py-3.5 text-[15px] font-medium text-ink/90 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#inquiry"
              onClick={() => setOpen(false)}
              className="mt-4 mb-4 inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo to-blue px-4 py-3 text-[14px] font-semibold text-white"
            >
              제작 문의하고 견적 받기
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
