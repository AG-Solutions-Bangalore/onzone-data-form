/**
 * Types for the `POST create-form-data` API.
 *
 * Body (JSON):
 *   full_name - required
 *   mobile_no - required
 *   email_id  - optional
 *   dob       - optional, YYYY-MM-DD
 *   doa       - optional, YYYY-MM-DD (date of anniversary)
 */

/** Exact payload sent to `POST /create-form-data`. */
export interface CreateFormDataPayload {
  full_name: string;
  mobile_no: string;
  email_id?: string;
  dob?: string;
  doa?: string;
}

/** Form values bound to the inputs (all strings; dates come from <input type="date"> as YYYY-MM-DD). */
export interface FormDataFormValues {
  full_name: string;
  mobile_no: string;
  email_id: string;
  dob: string;
  doa: string;
}

export const FORM_DATA_DEFAULTS: FormDataFormValues = {
  full_name: '',
  mobile_no: '',
  email_id: '',
  dob: '',
  doa: '',
};

/**
 * API record returned after create. Shape may vary by backend —
 * keep it loose so extra fields don't break the client.
 */
export interface FormDataRecord {
  id?: string | number;
  full_name: string;
  mobile_no: string;
  email_id?: string;
  dob?: string;
  doa?: string;
  [key: string]: unknown;
}
