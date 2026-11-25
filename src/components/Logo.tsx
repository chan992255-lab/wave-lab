import { brand } from '../config/brand';

type LogoProps = {
  size?: 'sm' | 'md';
  withWordmark?: boolean;
};

export function Logo({ size = 'md', withWordmark = true }: LogoProps) {
  const box = size === 'sm' ? 'h-8 w-8 rounded-[10px]' : 'h-9 w-9 rounded-xl';
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`${box} relative grid place-items-center bg-[#0E0E15] ring-1 ring-white/10`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 64 64" className={size === 'sm' ? 'h-5 w-5' : 'h-6 w-6'} fill="none">
          <defs>
            <linearGradient id="wl-mark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A5B4FC" />
              <stop offset="55%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
          </defs>
          <g stroke="url(#wl-mark)" strokeWidth="6" strokeLinecap="round">
            <path d="M8 26c5-7 10-7 15 0s10 7 15 0 10-7 15 0" opacity="0.5" />
            <path d="M8 39c5-7 10-7 15 0s10 7 15 0 10-7 15 0" />
          </g>
        </svg>
      </span>
      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-semibold tracking-tight text-ink">{brand.name}</span>
          {size === 'md' && (
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-sub">
              {brand.nameKo}
            </span>
          )}
        </span>
      )}
    </span>
  );
}
