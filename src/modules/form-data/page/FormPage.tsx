import type { FC } from 'react';
import { BrandLogo } from '@/components/membership/BrandHeader';
import { BenefitsList } from '@/components/membership/BenefitsList';
import { DetailsForm } from '@/components/membership/DetailsForm';

export const FormPage: FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#f7f3ec] dark:bg-[#0e1a30] text-[#171513] dark:text-[#f7f3ec] selection:bg-[#c5a46d] selection:text-[#171513]">
      {/* ============================================================== */}
      {/* 1. FULL-BLEED BOUTIQUE BACKGROUND IMAGE                        */}
      {/* ============================================================== */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img
          src="/boutique-bg.png"
          alt="Onzone Boutique Luxury Showroom"
          className="h-full w-full object-cover object-center"
        />
        {/* Subtle left gradient overlay ensuring high contrast for editorial typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3ec]/90 via-[#f7f3ec]/50 to-transparent lg:w-[48%] dark:from-[#0e1a30]/92 dark:via-[#0e1a30]/60 dark:to-transparent" />
      </div>

      {/* ============================================================== */}
      {/* 2. DESKTOP FULL-SCREEN COMPOSITION (lg and xl displays)         */}
      {/* ============================================================== */}
      <div className="relative z-10 hidden lg:flex lg:h-screen lg:w-full lg:overflow-hidden flex-col justify-between">
        {/* Top Header Bar */}
        <header className="flex w-full items-start justify-between px-8 sm:px-12 lg:px-14 xl:px-16 pt-7 xl:pt-9 select-none">
          <BrandLogo />

        </header>

        {/* Main Split: Left Editorial Text & Right Form Card */}
        <main className="flex flex-1 items-center justify-between px-8 sm:px-12 lg:px-14 xl:px-16 pb-4">
          {/* Left Side: Eyebrow + Headline + Description + Benefits + Signature */}
          <section
            aria-label="Editorial Introduction"
            className="flex max-w-[440px] xl:max-w-[480px] flex-col items-start"
          >
            {/* Eyebrow: MORE THAN FASHION ───── */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.26em] text-[#8b6a3e] dark:text-[#c5a46d] font-semibold">
                MORE THAN FASHION
              </span>
              <span className="h-[1px] w-12 xl:w-16 bg-[#c5a46d]" />
            </div>

            {/* Headline: Let's Get Connected (stacked, font-weight 400) */}
            <h1 className="mt-3 font-serif text-[48px] sm:text-[56px] xl:text-[68px] leading-[0.98] tracking-tight text-[#171513] dark:text-[#f7f3ec] font-normal">
              <span>Let&apos;s Get</span>
              <br />
              <span className="italic bg-gradient-to-r from-[#8b6a3e] via-[#c5a46d] to-[#735429] bg-clip-text text-transparent">
                Connected
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-[410px] text-[14px] sm:text-[15px] leading-[1.65] text-[#605b53] dark:text-[#c7bfb3] font-normal">
              Share a few details with us and be the first to know about our latest collections,
              exclusive offers and special updates.
            </p>

            {/* 3 Value Propositions */}
            <div className="mt-7">
              <BenefitsList />
            </div>
          </section>

          {/* Right Side: Form Card + Decorative Rail */}
          <div className="flex items-center gap-8 xl:gap-12">
            <section aria-label="Registration Form" className="relative z-20">
              <DetailsForm />
            </section>

            {/* Far Right Decorative Rail */}
            {/* <DecorativeRail /> */}
          </div>
        </main>
      </div>

      {/* ============================================================== */}
      {/* 3. TABLET & MOBILE RESPONSIVE STACKED LAYOUT (< lg screens)     */}
      {/* ============================================================== */}
      <div className="relative z-10 flex lg:hidden flex-col w-full px-5 sm:px-8 py-6 space-y-7">
        {/* Top Mobile Bar */}
        <header className="flex items-center justify-between border-b border-[#ded8ce]/60 dark:border-white/10 pb-4">
          <BrandLogo />
          
        </header>

        {/* Mobile Editorial Heading */}
        <div className="w-full max-w-md mx-auto text-left">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#8b6a3e] dark:text-[#c5a46d] font-semibold">
              MORE THAN FASHION
            </span>
            <span className="h-[1px] w-10 bg-[#c5a46d]" />
          </div>
          <h1 className="mt-3 font-serif text-[40px] sm:text-[46px] leading-[1.02] tracking-tight text-[#171513] dark:text-[#f7f3ec] font-normal">
            <span>Let&apos;s Get</span>
            <br />
            <span className="italic bg-gradient-to-r from-[#8b6a3e] via-[#c5a46d] to-[#735429] bg-clip-text text-transparent">
              Connected
            </span>
          </h1>
          <p className="mt-3 text-[14px] leading-relaxed text-[#605b53] dark:text-[#c7bfb3] font-normal">
            Share a few details with us and be the first to know about our latest collections,
            exclusive offers and special updates.
          </p>
        </div>

        {/* Benefits List */}
        <div className="w-full max-w-md mx-auto">
          <BenefitsList />
        </div>

        {/* Form Card */}
        <div className="w-full flex justify-center pt-2 pb-6">
          <DetailsForm />
        </div>

        {/* Mobile Footer */}
        <footer className="text-center pb-4 select-none">
          <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#77736d] dark:text-[#a8a094]">
            FASHION &nbsp;|&nbsp; PEOPLE &nbsp;|&nbsp; A BRIGHTER YOU
          </p>
        </footer>
      </div>
    </div>
  );
};

export default FormPage;
