import type { ProjectKind } from '../data/portfolio';

type Props = {
  kind: ProjectKind;
  from: string;
  to: string;
};

/** 카드마다 다른 느낌의 추상 UI 미리보기 (장식용). */
export function PreviewArt({ kind, from, to }: Props) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.28]"
        style={{ background: `radial-gradient(120% 90% at 15% 0%, ${from} 0%, transparent 55%)` }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: `radial-gradient(90% 80% at 100% 100%, ${to} 0%, transparent 60%)` }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }}
      />

      <div className="absolute inset-x-4 bottom-3 top-11 sm:inset-x-6">
        {kind === 'chart' && <ChartArt />}
        {kind === 'chat' && <ChatArt />}
        {kind === 'plan' && <PlanArt />}
        {kind === 'map' && <MapArt />}
        {kind === 'timer' && <TimerArt />}
        {kind === 'sound' && <SoundArt />}
      </div>
    </div>
  );
}

function ChartArt() {
  const candles = [22, 34, 26, 44, 38, 52, 30];
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg border border-white/10 bg-[#0B0B12]/70 p-2.5 backdrop-blur-sm">
      <div className="flex h-full items-end gap-[6%]">
        {candles.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t-[3px] ${i % 3 === 1 ? 'bg-rose-400/60' : 'bg-emerald-400/70'}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <svg
        className="pointer-events-none absolute inset-2.5 h-[calc(100%-20px)] w-[calc(100%-20px)]"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
      >
        <path
          d="M2 28 L18 22 L32 25 L48 15 L62 18 L78 8 L96 12"
          fill="none"
          stroke="rgba(147,197,253,0.85)"
          strokeWidth="1.2"
        />
      </svg>
    </div>
  );
}

function ChatArt() {
  return (
    <div className="flex h-full w-full flex-col justify-end gap-2 rounded-lg border border-white/10 bg-[#0B0B12]/70 p-2.5 backdrop-blur-sm">
      <div className="max-w-[62%] self-start rounded-xl rounded-bl-sm bg-white/10 px-2.5 py-1.5">
        <div className="h-1.5 w-16 rounded-full bg-white/40" />
        <div className="mt-1 h-1.5 w-10 rounded-full bg-white/20" />
      </div>
      <div className="max-w-[58%] self-end rounded-xl rounded-br-sm bg-gradient-to-r from-violet-500/70 to-indigo-500/70 px-2.5 py-1.5">
        <div className="h-1.5 w-14 rounded-full bg-white/70" />
      </div>
      <div className="max-w-[48%] self-start rounded-xl rounded-bl-sm bg-white/10 px-2.5 py-1.5">
        <div className="h-1.5 w-12 rounded-full bg-white/35" />
      </div>
      <div className="mt-0.5 flex items-center gap-1.5 self-end rounded-full border border-white/10 bg-white/[0.06] px-2 py-1">
        <span className="h-1 w-1 rounded-full bg-emerald-400" />
        <div className="h-1 w-9 rounded-full bg-white/25" />
      </div>
    </div>
  );
}

function PlanArt() {
  return (
    <div className="grid h-full w-full grid-cols-2 gap-2">
      <div className="space-y-1.5 rounded-lg border border-white/10 bg-[#0B0B12]/70 p-2 backdrop-blur-sm">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${i < 2 ? 'bg-emerald-400/90' : 'bg-white/15'}`}
            />
            <div className="h-1.5 flex-1 rounded-full bg-white/20" />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-between rounded-lg border border-white/10 bg-[#0B0B12]/70 p-2 backdrop-blur-sm">
        <div className="flex items-end gap-1">
          {[12, 20, 15, 26, 18].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-emerald-500/30 to-sky-400/70" style={{ height: h }} />
          ))}
        </div>
        <div className="rounded-md bg-white/[0.06] px-1.5 py-1">
          <div className="h-1 w-8 rounded-full bg-white/40" />
          <div className="mt-1 h-1 w-12 rounded-full bg-white/15" />
        </div>
      </div>
    </div>
  );
}

function MapArt() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg border border-white/10 bg-[#0B0B12]/70 backdrop-blur-sm">
      <svg viewBox="0 0 200 110" className="h-full w-full" preserveAspectRatio="none">
        <g fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1">
          <path d="M-10 78 L70 60 L120 72 L210 50" />
          <path d="M30 -10 L52 50 L40 120" />
          <path d="M120 -10 L108 45 L130 120" />
          <path d="M-10 22 L80 30 L150 18 L210 34" />
        </g>
        <path d="M-10 40 L60 30 L110 44 L210 28" fill="none" stroke="rgba(251,191,36,0.6)" strokeWidth="1.8" />
      </svg>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="relative flex h-6 w-6 items-center justify-center">
          <span className="absolute h-6 w-6 animate-ping rounded-full bg-rose-400/40" />
          <span className="relative h-2.5 w-2.5 rounded-full bg-rose-400 ring-2 ring-[#0B0B12]" />
        </span>
      </span>
      <span className="absolute bottom-2 left-2 rounded-md border border-white/10 bg-black/40 px-1.5 py-1">
        <span className="block h-1 w-10 rounded-full bg-white/35" />
      </span>
    </div>
  );
}

function TimerArt() {
  return (
    <div className="flex h-full w-full items-center gap-3 rounded-lg border border-white/10 bg-[#0B0B12]/70 p-3 backdrop-blur-sm">
      <svg viewBox="0 0 44 44" className="h-16 w-16 shrink-0 -rotate-90">
        <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3.5" />
        <circle
          cx="22"
          cy="22"
          r="18"
          fill="none"
          stroke="url(#timer-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="113"
          strokeDashoffset="38"
        />
        <defs>
          <linearGradient id="timer-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex-1 space-y-1.5">
        <div className="font-mono text-[15px] font-semibold tracking-tight text-white/85">25:00</div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-400/80 to-sky-400/80" />
        </div>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-1 flex-1 rounded-full bg-white/15" />
          ))}
        </div>
      </div>
    </div>
  );
}

function SoundArt() {
  const bars = [10, 22, 34, 18, 42, 28, 38, 16, 30, 44, 24, 36, 14, 26];
  return (
    <div className="relative flex h-full w-full items-center justify-center rounded-lg border border-white/10 bg-[#0B0B12]/70 px-3 backdrop-blur-sm">
      <div className="flex h-16 w-full items-center justify-center gap-[5px]">
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-[4px] rounded-full bg-gradient-to-t from-pink-500/70 to-amber-300/80"
            style={{ height: h }}
          />
        ))}
      </div>
      <span className="absolute bottom-2 right-2 rounded-full border border-white/10 bg-black/40 px-2 py-1 font-mono text-[9px] text-white/60">
        100
      </span>
    </div>
  );
}
