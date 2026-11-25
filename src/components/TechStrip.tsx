const items = ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PWA', 'Vercel', '반응형 UI'];

export function TechStrip() {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-3">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-3">
            <span className="whitespace-nowrap font-mono text-[10.5px] uppercase tracking-[0.22em] text-sub/70">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-indigo/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
