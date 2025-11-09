export const HEADER_ACTIONS = [
  { label: "overview", to: "/" },
  { label: "budgets", to: "/budgets" },
  { label: "goals", to: "/goals" },
  { label: "reports", to: "/reports" },
] as const;

export const HEADER_BRAND = {
  title: "Expense Tracker",
};

export const AVAILABLE_LANGUAGES = ["en", "az"] as const;
