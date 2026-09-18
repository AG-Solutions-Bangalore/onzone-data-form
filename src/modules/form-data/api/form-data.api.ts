import { api } from '@/lib/axios';
import type { CreateFormDataPayload, FormDataRecord, FormType } from '../types/form-data.types';

/** Endpoint path — base URL comes from `VITE_API_URL` (see .env.example). */
export const CREATE_FORM_DATA_PATH = '/create-form-data';

/**
 * Which form this build submits as. Set `VITE_FORM_TYPE=family` in `.env`
 * for the family form — anything else (or unset) submits as "client".
 */
export const FORM_TYPE: FormType = import.meta.env.VITE_FORM_TYPE === 'family' ? 'family' : 'client';

/**
 * POST create-form-data.
 * Empty optional strings are omitted so the backend receives only filled fields.
 */
export async function createFormData(payload: CreateFormDataPayload): Promise<FormDataRecord> {
  const body: CreateFormDataPayload = {
    full_name: payload.full_name.trim(),
    mobile_no: payload.mobile_no.trim(),
    form_type: FORM_TYPE,
  };
  const email = payload.email_id?.trim();
  const dob = payload.dob?.trim();
  const doa = payload.doa?.trim();
  if (email) body.email_id = email;
  if (dob) body.dob = dob;
  if (doa) body.doa = doa;

  const { data } = await api.post<FormDataRecord>(CREATE_FORM_DATA_PATH, body);
  return data;
}
