import { CATEGORY_OPTIONS } from "@/constants";
import type { FormState } from "@/types/form.types";

export const createDefaultFormState = (): FormState => ({
  title: "",
  amount: "",
  category: CATEGORY_OPTIONS[0],
  type: "expense",
  date: new Date().toISOString().split("T")[0],
  notes: "",
});
