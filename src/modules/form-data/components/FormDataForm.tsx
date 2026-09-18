import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import { DatePicker } from '@/components/ui/date-picker';
import { useCreateFormData } from '../hooks/use-create-form-data';
import { FORM_DATA_DEFAULTS, type FormDataFormValues } from '../types/form-data.types';

const inputClass =
  'w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring';
const labelClass = 'mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground';
const errorClass = 'mt-1 text-xs text-destructive';

/** Mobile must contain 10–15 digits (allows +, spaces, dashes, brackets). */
function validateMobile(value: string): string | true {
  const digits = value.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 15) return 'Enter a valid mobile number';
  return true;
}

/** Data form wired to `POST create-form-data` via react-hook-form + react-query. */
export function FormDataForm() {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormDataFormValues>({ defaultValues: FORM_DATA_DEFAULTS });

  const createFormData = useCreateFormData();

  const onSubmit: SubmitHandler<FormDataFormValues> = (values) => {
    createFormData.mutate(
      {
        full_name: values.full_name,
        mobile_no: values.mobile_no,
        email_id: values.email_id.trim() || undefined,
        dob: values.dob.trim() || undefined,
        doa: values.doa.trim() || undefined,
      },
      { onSuccess: () => reset() },
    );
  };

  return (
    <form
      onSubmit={(e) => void handleSubmit(onSubmit)(e)}
      className="w-full max-w-md rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm"
    >
      <p className="eyebrow">Onzone</p>
      <h2 className="mt-2 text-xl">Share your details</h2>

      <div className="mt-4 space-y-4">
        <div>
          <label htmlFor="fd-full-name" className={labelClass}>
            Full name *
          </label>
          <input
            id="fd-full-name"
            className={inputClass}
            placeholder="Aarav Sharma"
            autoComplete="name"
            {...register('full_name', {
              required: 'Full name is required',
              minLength: { value: 2, message: 'Too short' },
            })}
          />
          {errors.full_name && <p className={errorClass}>{errors.full_name.message}</p>}
        </div>

        <div>
          <label htmlFor="fd-mobile" className={labelClass}>
            Mobile no *
          </label>
          <input
            id="fd-mobile"
            type="tel"
            className={inputClass}
            placeholder="+91 98765 43210"
            autoComplete="tel"
            {...register('mobile_no', { required: 'Mobile number is required', validate: validateMobile })}
          />
          {errors.mobile_no && <p className={errorClass}>{errors.mobile_no.message}</p>}
        </div>

        <div>
          <label htmlFor="fd-email" className={labelClass}>
            Email id
          </label>
          <input
            id="fd-email"
            type="email"
            className={inputClass}
            placeholder="you@example.com"
            autoComplete="email"
            {...register('email_id', {
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
            })}
          />
          {errors.email_id && <p className={errorClass}>{errors.email_id.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="fd-dob" className={labelClass}>
              Date of birth
            </label>
            <Controller
              name="dob"
              control={control}
              render={({ field }) => (
                <DatePicker
                  id="fd-dob"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Select date"
                  ariaLabel="Date of birth"
                />
              )}
            />
          </div>
          <div>
            <label htmlFor="fd-doa" className={labelClass}>
              Anniversary
            </label>
            <Controller
              name="doa"
              control={control}
              render={({ field }) => (
                <DatePicker
                  id="fd-doa"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Select date"
                  ariaLabel="Anniversary date"
                />
              )}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={createFormData.isPending}
          className="w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
        >
          {createFormData.isPending ? 'Submitting…' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
