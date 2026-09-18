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
        {/* Left gradient overlay ensuring contrast on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3ec]/92 via-[#f7f3ec]/55 to-transparent lg:w-[52%] dark:from-[#0e1a30]/95 dark:via-[#0e1a30]/65 dark:to-transparent hidden lg:block" />
      </div>

      {/* ============================================================== */}
      {/* 2. DESKTOP FULL-SCREEN COMPOSITION (lg and xl displays)         */}
      {/*    Matches new creative: Hi, This is ONZONE. / Share Your Details */}
      {/* ============================================================== */}
      <div className="relative z-10 hidden lg:flex lg:min-h-screen lg:w-full flex-col justify-between">
        {/* Top Header Bar */}
        <header className="flex w-full items-start justify-between px-8 sm:px-12 lg:px-14 xl:px-16 pt-6 xl:pt-8 select-none">
          <BrandLogo />
          <div className="flex items-center gap-4 pt-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#8b6a3e] dark:text-[#c5a46d] font-medium">
              Let&apos;s stay connected
            </span>
            <span className="h-[1px] w-16 bg-[#c5a46d]" />
          </div>
        </header>

        {/* Main Split: Left Editorial Text & Right Form Card */}
        <main className="flex flex-1 items-center justify-between gap-6 xl:gap-10 px-8 sm:px-12 lg:px-10 xl:px-16 pb-6">
          {/* Left Side: Eyebrow + Headline + Description + Benefits + Thank-you */}
          <section
            aria-label="Editorial Introduction"
            className="flex max-w-[400px] xl:max-w-[500px] flex-col items-start"
          >
            {/* Eyebrow: STYLE | QUALITY | YOU */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.26em] text-[#8b6a3e] dark:text-[#c5a46d] font-medium">
                Style &nbsp;|&nbsp; Quality &nbsp;|&nbsp; You
              </span>
            </div>

            {/* Headline: Hi, This is ONZONE. */}
            <h1 className="mt-3 font-serif text-[52px] xl:text-[68px] leading-[0.98] tracking-tight text-[#171513] dark:text-[#f7f3ec] font-normal">
              <span>Hi,</span>
              <br />
              <span>This is</span>
              <br />
              <span className="bg-gradient-to-r from-[#8b6a3e] via-[#a98552] to-[#735429] bg-clip-text text-transparent">
                ONZONE.
              </span>
            </h1>
            <span className="mt-4 h-[1.5px] w-14 bg-[#c5a46d]" />

            {/* Description */}
            <p className="mt-3 max-w-[420px] text-[13px] sm:text-[14px] leading-[1.6] font-normal">
              <span className="font-semibold text-[#171513] dark:text-[#f7f3ec]">
                We are updating our database.
              </span>
              <br />
              <span className="text-[#605b53] dark:text-[#c7bfb3]">
                Please fill out this form with your details.
              </span>
            </p>

            {/* 4 Value Propositions */}
            <div className="mt-6 w-full max-w-[440px]">
              <BenefitsList />
            </div>
          </section>

          {/* Right Side: Form Card + vertical side captions */}
          <div className="flex shrink-0 items-center gap-8 xl:gap-10">
            <section aria-label="Registration Form" className="relative z-20 shrink-0">
              <DetailsForm />
            </section>

            {/* Vertical captions — Fashion beyond trends / People Style Onzone */}
            <div className="hidden xl:flex flex-col items-center justify-between self-stretch py-6 select-none">
              <span
                className="font-mono text-[9px] uppercase tracking-[0.32em] text-[#8b6a3e] dark:text-[#c5a46d]/90"
                style={{ writingMode: 'vertical-rl' }}
              >
                Fashion &nbsp; Beyond &nbsp; Trends
              </span>
              <span className="h-16 w-[1px] bg-[#c5a46d]/60" />
              <span
                className="font-mono text-[9px] uppercase tracking-[0.32em] text-[#8b6a3e] dark:text-[#c5a46d]/90"
                style={{ writingMode: 'vertical-rl' }}
              >
                People &nbsp; Style &nbsp; Onzone
              </span>
            </div>
          </div>
        </main>
      </div>

      {/* ============================================================== */}
      {/* 3. MOBILE & TABLET LUXURY RESPONSIVE LAYOUT (< lg screens)     */}
      {/* ============================================================== */}
      <div className="relative z-10 flex lg:hidden flex-col w-full min-h-screen">
        {/* Soft luxury veil ensuring high contrast and readable text on mobile */}
        <div className="fixed inset-0 bg-[#f7f3ec]/92 dark:bg-[#0e1a30]/94 backdrop-blur-[6px] pointer-events-none -z-10" />

        {/* Top Mobile Bar */}
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[#ded8ce]/70 dark:border-white/10 bg-[#f7f3ec]/85 dark:bg-[#0e1a30]/85 backdrop-blur-md px-5 py-3.5 shadow-xs">
          <BrandLogo />
          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#8b6a3e] dark:text-[#c5a46d] font-medium">
            Let&apos;s stay connected
          </span>
        </header>

        <div className="flex flex-col px-5 sm:px-8 py-5 space-y-6 max-w-lg mx-auto w-full">
          {/* Mobile Editorial Heading */}
          <div className="flex flex-col items-start text-left pt-1">
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#8b6a3e] dark:text-[#c5a46d] font-medium">
                Style &nbsp;|&nbsp; Quality &nbsp;|&nbsp; You
              </span>
            </div>
            <h1 className="mt-2 font-serif text-[40px] sm:text-[44px] leading-[1.0] tracking-tight text-[#171513] dark:text-[#f7f3ec] font-normal">
              <span>Hi,</span>
              <br />
              <span>This is</span>{' '}
              <span className="bg-gradient-to-r from-[#8b6a3e] via-[#a98552] to-[#735429] bg-clip-text text-transparent">
                ONZONE.
              </span>
            </h1>
            <p className="mt-2 text-[13px] leading-relaxed font-normal">
              <span className="font-semibold text-[#171513] dark:text-[#f7f3ec]">
                We are updating our database.{' '}
              </span>
              <span className="text-[#605b53] dark:text-[#c7bfb3]">
                Please fill out this form with your details.
              </span>
            </p>
          </div>

          {/* Boutique Showcase Card */}
          <div className="relative h-44 sm:h-52 w-full rounded-2xl overflow-hidden shadow-md border border-[#ded8ce]/80 dark:border-white/10">
            <img
              src="/boutique-bg.png"
              alt="Boutique Luxury Interior"
              className="h-full w-full object-cover object-[center_35%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white/95">
              <span className="font-serif text-xs tracking-widest uppercase">Timeless Elegance</span>
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/80">
                Onzone Boutique
              </span>
            </div>
          </div>

          {/* Benefits — 4 items */}
          <div className="w-full">
            <BenefitsList />
          </div>

          {/* Mobile Thank-you signature (desktop version lives inside BenefitsList) */}
          <div className="lg:hidden flex justify-start select-none -mt-1">
            <div className="inline-flex flex-col items-center text-center -rotate-3 origin-bottom-left">
              <p className="font-['Great_Vibes'] text-[38px] leading-none text-[#a98552]">
                Thank you
              </p>
              <p className="mt-1 font-mono text-[9px] tracking-[0.3em] uppercase text-[#77736d] dark:text-[#a8a094] text-center leading-relaxed">
                For being a part
                <br />
                of Onzone
              </p>
              <span className="mt-2 block h-[1.5px] w-14 bg-[#c5a46d]" />
            </div>
          </div>

          {/* Form Card */}
          <div className="w-full flex justify-center pt-1 pb-4">
            <DetailsForm />
          </div>

          {/* Mobile Footer */}
          <footer className="text-center pb-6 select-none">
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-[#77736d] dark:text-[#a8a094]">
              Fashion &nbsp;|&nbsp; People &nbsp;|&nbsp; Style Onzone
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
