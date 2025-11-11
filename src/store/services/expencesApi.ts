import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { EXPENSES_STORAGE_KEY } from "@/constants";
import type { FormState } from "@/types/form.types";
import type { ExpenseEntry } from "@/types/expenses.types";

const generateId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const getStoredExpenses = (): ExpenseEntry[] | undefined => {
  try {
    const raw = window.localStorage.getItem(EXPENSES_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return parsed;
  } catch {}
};

const persistExpenses = (expenses: ExpenseEntry[]) => {
  window.localStorage.setItem(EXPENSES_STORAGE_KEY, JSON.stringify(expenses));
};

const normalizeAmount = (value: string | number) => {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }

  if (typeof value !== "string") {
    return 0;
  }

  const normalized = Number.parseFloat(value.replace(",", "."));
  return Number.isFinite(normalized) ? normalized : 0;
};

const mapFormStateToEntry = (values: FormState, id?: string): ExpenseEntry => ({
  id: id ?? generateId(),
  title: values.title.trim(),
  amount: normalizeAmount(values.amount),
  category: values.category,
  type: values.type,
  date: values.date,
  notes: values.notes?.trim(),
});

export const expencesApi = createApi({
  reducerPath: "expencesApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Expenses"],
  endpoints: (builder) => ({
    getExpenses: builder.query<ExpenseEntry[], void>({
      queryFn: async () => {
        const data = getStoredExpenses() ?? [];
        return { data };
      },
      providesTags: ["Expenses"],
    }),
    addExpense: builder.mutation<ExpenseEntry, FormState>({
      queryFn: async (values) => {
        const current = getStoredExpenses() ?? [];
        const nextEntry = mapFormStateToEntry(values);
        persistExpenses([nextEntry, ...current]);

        return { data: nextEntry };
      },
      invalidatesTags: ["Expenses"],
    }),
    updateExpense: builder.mutation<
      ExpenseEntry,
      { id: string; values: FormState }
    >({
      queryFn: async ({ id, values }) => {
        const current = getStoredExpenses() ?? [];
        const nextEntry = mapFormStateToEntry(values, id);
        const next = current.map((expense) =>
          expense.id === id ? nextEntry : expense
        );
        persistExpenses(next);

        return { data: nextEntry };
      },
      invalidatesTags: ["Expenses"],
    }),
    deleteExpense: builder.mutation<void, string>({
      queryFn: async (id) => {
        const current = getStoredExpenses() ?? [];
        const next = current.filter((expense) => expense.id !== id);
        persistExpenses(next);

        return { data: undefined };
      },
      invalidatesTags: ["Expenses"],
    }),
  }),
});

export const {
  useGetExpensesQuery,
  useAddExpenseMutation,
  useUpdateExpenseMutation,
  useDeleteExpenseMutation,
} = expencesApi;
