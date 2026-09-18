import type { FC } from 'react';

/** ONZONE Logo: uses the real brand mark from `public/logo.svg` */
export const BrandLogo: FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex flex-row items-center select-none ${className}`}>
      <img
        src="/logo.svg"
        alt="Onzone — Timeless Elegance"
        className="h-8 sm:h-9 lg:h-10 w-auto shrink-0 object-contain"
      />
    </div>
  );
};

export const BrandHeader: FC = () => {
  return (
    <header className="flex flex-col items-start w-full">
      {/* Brand Logo Lockup */}
      <BrandLogo />

      {/* Eyebrow: MORE THAN FASHION ───── */}
      <div className="mt-8 lg:mt-10 flex items-center gap-3">
        <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.26em] text-[#8b6a3e] dark:text-[#c5a46d] font-semibold">
          MORE THAN FASHION
        </span>
        <span className="h-[1px] w-10 sm:w-16 bg-[#c5a46d]" />
      </div>

      {/* Main Editorial Heading: Let's Get Connected (font-weight: 400, tight line-height, stacked) */}
      <h1
        className="mt-3 font-serif text-[44px] sm:text-[54px] lg:text-[60px] xl:text-[72px] leading-[0.98] tracking-tight text-[#171513] dark:text-[#f7f3ec] font-normal"
        style={{ fontSynthesis: 'none' }}
      >
        <span>Let&apos;s Get</span>
        <br />
        <span className="italic bg-gradient-to-r from-[#8b6a3e] via-[#c5a46d] to-[#735429] bg-clip-text text-transparent">
          Connected
        </span>
      </h1>

      {/* Supporting Copy */}
      <p className="mt-4 max-w-[420px] text-[14px] sm:text-[15px] leading-[1.65] text-[#605b53] dark:text-[#c7bfb3] font-normal">
        Share a few details with us and be the first to know about our latest collections, exclusive
        offers and special updates.
      </p>
    </header>
  );
};
