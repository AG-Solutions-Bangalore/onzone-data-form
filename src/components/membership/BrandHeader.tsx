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

      {/* Eyebrow: STYLE | QUALITY | YOU */}
      <div className="mt-8 lg:mt-10 flex items-center gap-3">
        <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.26em] text-[#8b6a3e] dark:text-[#c5a46d] font-medium">
          Style &nbsp;|&nbsp; Quality &nbsp;|&nbsp; You
        </span>
      </div>

      {/* Main Editorial Heading: Hi, This is ONZONE. */}
      <h1
        className="mt-3 font-serif text-[44px] sm:text-[54px] lg:text-[60px] xl:text-[72px] leading-[0.98] tracking-tight text-[#171513] dark:text-[#f7f3ec] font-normal"
        style={{ fontSynthesis: 'none' }}
      >
        <span>Hi,</span>
        <br />
        <span>This is</span>
        <br />
        <span className="bg-gradient-to-r from-[#8b6a3e] via-[#a98552] to-[#735429] bg-clip-text text-transparent">
          ONZONE.
        </span>
      </h1>

      {/* Supporting Copy */}
      <p className="mt-4 max-w-[420px] text-[14px] sm:text-[15px] leading-[1.65] font-normal">
        <span className="font-semibold text-[#171513] dark:text-[#f7f3ec]">
          We are updating our database.
        </span>{' '}
        <span className="text-[#605b53] dark:text-[#c7bfb3]">
          Please fill out this form with your details.
        </span>
      </p>
    </header>
  );
};
