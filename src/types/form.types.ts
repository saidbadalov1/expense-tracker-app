import type { FormikProps } from "formik";

export type EntryType = "income" | "expense";

export interface FormState {
  title: string;
  amount: string;
  category: string;
  type: EntryType;
  date: string;
  notes?: string;
}

export interface EntryFormProps {
  formik: FormikProps<FormState>;
  onCancel: () => void;
}
