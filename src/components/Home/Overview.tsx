import { FILTER_OPTIONS } from "@/constants";
import { setEditingId } from "@/store/features/form.slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  useDeleteExpenseMutation,
  useGetExpensesQuery,
} from "@/store/services/expencesApi";
import type { FormState } from "@/types/form.types";
import { dateFormatter, localeFormatter } from "@/utils";
import {
  Box,
  Divider,
  IconButton,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import type { FormikProps } from "formik";
import { useMemo, type MouseEvent } from "react";

import { useTranslation } from "react-i18next";
import { createDefaultFormState } from "./functions";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import { setFilter } from "@/store/features/expences.slice";

interface OverviewProps {
  formik: FormikProps<FormState>;
}
const Overview = ({ formik }: OverviewProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { editingId } = useAppSelector((state) => state.form);
  const locale = localeFormatter();
  const date = dateFormatter();

  const { filter } = useAppSelector((state) => state.expences);

  const {
    data: expensesData = [],
    isLoading,
    isFetching,
    refetch,
  } = useGetExpensesQuery();

  const [deleteExpense] = useDeleteExpenseMutation();

  const totals = useMemo(() => {
    return expensesData.reduce(
      (acc, expense) => {
        if (expense.type === "income") {
          acc.income += expense.amount;
        } else {
          acc.expense += expense.amount;
        }

        acc.balance = acc.income - acc.expense;

        return acc;
      },
      { income: 0, expense: 0, balance: 0 }
    );
  }, [expensesData]);

  const filteredExpenses = useMemo(() => {
    if (filter === "all") {
      return expensesData;
    }

    return expensesData.filter((expense) => expense.type === filter);
  }, [expensesData, filter]);

  const handleDelete = async (id: string) => {
    try {
      await deleteExpense(id).unwrap();
      if (editingId === id) {
        resetForm();
      }
      await refetch();
    } catch (error) {}
  };

  const handleStartEdit = (id: string) => {
    const target = expensesData.find((expense) => expense.id === id);

    if (!target) {
      return;
    }

    dispatch(setEditingId(id));
    formik.setValues({
      title: target.title,
      amount: target.amount.toString(),
      category: target.category,
      type: target.type,
      date: target.date,
      notes: target.notes ?? "",
    });
    formik.setTouched({});
  };

  const handleFilterChange = (
    _event: MouseEvent<HTMLElement>,
    value: string | null
  ) => {
    if (!value) {
      return;
    }
    dispatch(setFilter(value as (typeof FILTER_OPTIONS)[number]));
  };

  const resetForm = () => {
    formik.resetForm({ values: createDefaultFormState() });
    setEditingId(null);
  };

  return (
    <Stack sx={{ flex: 1 }} spacing={3}>
      <Paper variant="outlined" elevation={0} sx={{ p: 3 }}>
        <Typography variant="xl_semibold" gutterBottom>
          {t("home.summary.title")}
        </Typography>
        <Stack spacing={1.5}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="s_regular" color="text.secondary">
              {t("home.summary.income")}
            </Typography>
            <Typography variant="m_semibold" color="success.main">
              {locale.format(totals.income)}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="s_regular" color="text.secondary">
              {t("home.summary.expense")}
            </Typography>
            <Typography variant="m_semibold" color="error.main">
              {locale.format(totals.expense)}
            </Typography>
          </Stack>

          <Divider />

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="s_regular" color="text.secondary">
              {t("home.summary.balance")}
            </Typography>
            <Typography variant="m_semibold">
              {locale.format(totals.balance)}
            </Typography>
          </Stack>
        </Stack>
      </Paper>

      <Paper variant="outlined" elevation={0} sx={{ p: 3, flex: 1 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Typography variant="xl_semibold">{t("home.list.title")}</Typography>
          <ToggleButtonGroup
            exclusive
            value={filter}
            onChange={handleFilterChange}
            size="small"
            color="primary"
          >
            {FILTER_OPTIONS.map((option) => (
              <ToggleButton key={option} value={option}>
                {t(`home.filters.${option}`)}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={2}>
          {isLoading || isFetching ? (
            <Typography variant="s_regular" color="text.secondary">
              {t("home.list.loading")}
            </Typography>
          ) : filteredExpenses.length === 0 ? (
            <Box
              sx={{
                border: "1px dashed",
                borderColor: "divider",
                borderRadius: 2,
                p: 3,
                textAlign: "center",
              }}
            >
              <Typography variant="s_regular" color="text.secondary">
                {t("home.list.empty")}
              </Typography>
            </Box>
          ) : (
            filteredExpenses.map((expense) => (
              <Paper
                key={expense.id}
                variant="outlined"
                elevation={0}
                sx={{
                  p: 2,
                  borderColor:
                    expense.type === "income" ? "success.light" : "error.light",
                }}
              >
                <Stack spacing={1.5}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Stack direction={"column"} spacing={1}>
                      <Typography variant="m_semibold">
                        {expense.title}
                      </Typography>
                      <Typography variant="s_regular" color="text.secondary">
                        {t(`home.categories.${expense.category}`)} •{" "}
                        {date.format(new Date(expense.date))}
                      </Typography>
                    </Stack>

                    <Typography
                      variant="m_bold"
                      color={
                        expense.type === "income"
                          ? "success.main"
                          : "error.main"
                      }
                    >
                      {expense.type === "income" ? "+" : "–"}
                      {locale.format(expense.amount)}
                    </Typography>
                  </Stack>

                  {expense.notes && (
                    <Typography variant="s_regular" color="text.secondary">
                      {expense.notes}
                    </Typography>
                  )}

                  <Stack direction="row" spacing={1} justifyContent="flex-end">
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => handleStartEdit(expense.id)}
                      aria-label={t("home.list.actions.edit")}
                    >
                      <EditRoundedIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() => handleDelete(expense.id)}
                      aria-label={t("home.list.actions.delete")}
                    >
                      <DeleteRoundedIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </Stack>
              </Paper>
            ))
          )}
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Overview;
