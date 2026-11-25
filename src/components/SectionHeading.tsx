import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, className = '', align = 'left' }: Props) {
  return (
    <div className={`${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-iris">
        {align === 'left' && <span className="h-px w-6 bg-gradient-to-r from-iris to-transparent" />}
        {eyebrow}
      </p>
      <h2 className="mt-4 break-keep text-[1.75rem] font-bold leading-[1.22] tracking-[-0.025em] text-ink sm:text-[2.35rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 break-keep text-[14.5px] leading-[1.75] text-sub sm:text-[15.5px]">{description}</p>
      )}
    </div>
  );
}
