import { useEffect, useId, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Calendar } from './calendar';

const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function toDate(iso: string): Date | undefined {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!match) return undefined;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  return Number.isNaN(date.getTime()) ? undefined : date;
}

function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** "1990-05-21" -> "21 May 1990" for the trigger button label. */
function formatDisplay(iso: string): string {
  const date = toDate(iso);
  if (!date) return iso;
  return `${date.getDate()} ${MONTHS_SHORT[date.getMonth()]} ${date.getFullYear()}`;
}

function CalendarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 opacity-60"
    >
      <path d="M8 2v4M16 2v4M3 10h18" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
    </svg>
  );
}

export interface DatePickerProps {
  id?: string;
  /** Selected date as YYYY-MM-DD, or "" when empty. */
  value: string;
  onChange: (isoDate: string) => void;
  placeholder?: string;
  ariaLabel?: string;
  disabled?: boolean;
  className?: string;
}

/**
 * shadcn-style date picker: trigger button + dropdown calendar panel.
 * Value stays a YYYY-MM-DD string (month/year dropdowns included,
 * future dates disabled) so it plugs straight into react-hook-form.
 */
export function DatePicker({
  id,
  value,
  onChange,
  placeholder = 'Pick a date',
  ariaLabel,
  disabled = false,
  className,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const generatedId = useId();
  const buttonId = id ?? generatedId;

  const selected = toDate(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open ]);

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <button
        ref={buttonRef}
        id={buttonId}
        type="button"
        disabled={disabled}
        aria-label={ariaLabel}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          'flex w-full items-center justify-between gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground shadow-xs transition-colors hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-ring disabled:opacity-60',
          !selected && 'text-muted-foreground',
        )}
      >
        <span>{selected ? formatDisplay(value) : placeholder}</span>
        <CalendarIcon />
      </button>

      {open && !disabled && (
        <div
          role="dialog"
          aria-label={ariaLabel ?? placeholder}
          className="absolute z-50 mt-2 rounded-md border border-border bg-popover text-popover-foreground shadow-md"
        >
          <Calendar
            mode="single"
            captionLayout="dropdown"
            reverseYears
            endMonth={today}
            disabled={{ after: today }}
            defaultMonth={selected ?? today}
            selected={selected}
            onSelect={(date) => {
              if (date) onChange(toISODate(date));
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}
