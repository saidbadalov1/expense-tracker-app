import type { FormState } from "@/types/form.types";
import { Box, Stack } from "@mui/material";
import { type FormikHelpers, useFormik } from "formik";

import EntryForm from "./EntryForm";
import { createDefaultFormState } from "./functions";
import { expenseFormValidation } from "@/validations/expenseForm.validation";
import {
  useAddExpenseMutation,
  useGetExpensesQuery,
  useUpdateExpenseMutation,
} from "@/store/services/expencesApi";
import Overview from "./Overview";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setEditingId } from "@/store/features/form.slice";
import HomeTitle from "./HomeTitle";

const Home = () => {
  const dispatch = useAppDispatch();
  const { refetch } = useGetExpensesQuery();
  const [addExpense] = useAddExpenseMutation();
  const [updateExpense] = useUpdateExpenseMutation();

  const { editingId } = useAppSelector((state) => state.form);

  const handleSubmit = async (
    values: FormState,
    helpers: FormikHelpers<FormState>
  ) => {
    try {
      if (editingId) {
        await updateExpense({ id: editingId, values }).unwrap();
      } else {
        await addExpense(values).unwrap();
      }
      helpers.resetForm({ values: createDefaultFormState() });
      dispatch(setEditingId(null));
      await refetch();
    } catch (error) {
    } finally {
      helpers.setSubmitting(false);
    }
  };

  const formik = useFormik<FormState>({
    initialValues: createDefaultFormState(),
    enableReinitialize: false,
    validationSchema: expenseFormValidation,
    onSubmit: handleSubmit,
  });

  const resetForm = () => {
    formik.resetForm({ values: createDefaultFormState() });
    dispatch(setEditingId(null));
  };

  return (
    <Box component={"main"} className="container" sx={{ py: 6 }}>
      <Stack spacing={4}>
        <HomeTitle />
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="start"
          spacing={3}
        >
          <EntryForm formik={formik} onCancel={resetForm} />
          <Overview formik={formik} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Home;
