import type { EntryType } from "./form.types";

export interface ExpenseEntry {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: EntryType;
  date: string;
  notes?: string;
}
