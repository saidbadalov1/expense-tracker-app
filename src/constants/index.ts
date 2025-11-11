export const LANGUAGE_STORAGE_KEY = "expense-tracker:language";
export const EXPENSES_STORAGE_KEY = "expense-tracker:expenses";

export const CATEGORY_OPTIONS = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "health",
  "entertainment",
  "savings",
  "other",
] as const;

export const FILTER_OPTIONS = ["all", "income", "expense"] as const;
