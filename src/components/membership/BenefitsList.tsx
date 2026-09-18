import type { FC } from 'react';
import { Diamond, Tag, Heart, Users } from 'lucide-react';

const BENEFITS = [
  {
    icon: Diamond,
    title: 'Exclusive Collections',
  },
  {
    icon: Tag,
    title: 'Special Offers',
  },
  {
    icon: Heart,
    title: 'Priority Updates',
  },
  {
    icon: Users,
    title: 'A More Personalized Experience',
  },
] as const;

export const BenefitsList: FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 4 benefit items in a row — flush left, equal gaps */}
      <div className="grid grid-cols-4 gap-3 sm:gap-4 lg:gap-4 xl:gap-5">
        {BENEFITS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group flex flex-col items-start gap-2 text-left transition-transform duration-300 hover:-translate-y-0.5"
            >
              {/* Thin gold bordered circular container */}
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-[#c5a46d]/70 bg-[#faf7f1]/70 dark:bg-[#1a2946]/50 text-[#171513] dark:text-[#c5a46d] shadow-xs group-hover:border-[#8b6a3e] group-hover:scale-105 transition-all">
                <Icon className="h-5 w-5 stroke-[1.4]" />
              </div>

              {/* Label */}
              <p className="font-sans text-[10px] sm:text-[11px] lg:text-[10px] xl:text-[11px] font-medium text-[#171513] dark:text-[#f7f3ec] leading-[1.35] max-w-[110px] text-left">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>

      {/* Signature: Thank you — FOR BEING A PART OF ONZONE (desktop only) */}
      <div className="hidden lg:block mt-8 sm:mt-10 lg:mt-10 select-none">
        <div className="inline-flex flex-col items-center text-center -rotate-3 transform origin-bottom-left transition-transform hover:scale-105 duration-300">
          <p className="font-['Great_Vibes'] text-[44px] xl:text-[52px] leading-none text-[#a98552]">
            Thank you
          </p>
          <p className="mt-1 font-mono text-[10px] xl:text-[11px] tracking-[0.3em] uppercase text-[#77736d] dark:text-[#a8a094] text-center leading-relaxed">
            For being a part
            <br />
            of Onzone
          </p>
          <span className="mt-3 block h-[1.5px] w-16 bg-[#c5a46d]" />
        </div>
      </div>
    </div>
  );
};
