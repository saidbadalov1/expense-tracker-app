import i18n from "@/i18n";
import { CATEGORY_OPTIONS } from "@/constants";
import type { EntryType, FormState } from "@/types/form.types";
import * as yup from "yup";

const ENTRY_TYPES: EntryType[] = ["income", "expense"];
const MAX_NOTES_LENGTH = 500;

const translate = (key: string, options?: Record<string, unknown>) => {
  const result = i18n.t(key, options);
  return typeof result === "string" ? result : key;
};

export const expenseFormValidation: yup.ObjectSchema<FormState> = yup.object({
  title: yup
    .string()
    .trim()
    .required(translate("home.form.errors.titleRequired")),
  amount: yup
    .string()
    .trim()
    .required(translate("home.form.errors.amountPositive"))
    .test(
      "is-positive-number",
      translate("home.form.errors.amountPositive"),
      (value) => {
        if (!value) {
          return false;
        }

        const normalized = Number.parseFloat(value.replace(",", "."));

        return Number.isFinite(normalized) && normalized > 0;
      }
    ),
  category: yup
    .string()
    .oneOf(
      [...CATEGORY_OPTIONS],
      translate("home.form.errors.categoryRequired")
    )
    .required(translate("home.form.errors.categoryRequired")),
  type: yup
    .mixed<EntryType>()
    .oneOf(ENTRY_TYPES, translate("home.form.errors.typeRequired"))
    .required(translate("home.form.errors.typeRequired")),
  date: yup
    .string()
    .required(translate("home.form.errors.dateRequired"))
    .test(
      "is-valid-date",
      translate("home.form.errors.dateRequired"),
      (value) => {
        if (!value) {
          return false;
        }

        return !Number.isNaN(Date.parse(value));
      }
    ),
  notes: yup
    .string()
    .optional()
    .max(
      MAX_NOTES_LENGTH,
      translate("home.form.errors.notesTooLong", { max: MAX_NOTES_LENGTH })
    ),
});
