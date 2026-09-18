import type { FC } from 'react';
import { ShieldCheck } from 'lucide-react';

export const PrivacyNote: FC = () => {
  return (
    <div className="mt-3 flex flex-col items-center justify-center gap-1.5 text-center select-none">
      <div className="flex items-center justify-center gap-2">
        <ShieldCheck className="h-4 w-4 stroke-[1.8] text-[#171513] dark:text-[#c5a46d]" aria-hidden="true" />
        <span className="text-[10px] sm:text-[11px] font-medium text-[#161616] dark:text-[#c7bfb3]">
          Your information is safe with us.
        </span>
      </div>
      <span className="h-[1.5px] w-10 bg-[#c5a46d]" />
    </div>
  );
};
