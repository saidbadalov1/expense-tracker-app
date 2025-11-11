import {
  MenuItem,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { CATEGORY_OPTIONS } from "@/constants";
import type { EntryFormProps, EntryType } from "@/types/form.types";
import { useAppSelector } from "@/store/hooks";
import FormInput from "@/components/shared/FormInput";
import SharedButton from "@/components/shared/Button";

const EntryForm = ({ formik, onCancel }: EntryFormProps) => {
  const { t } = useTranslation();

  const { editingId } = useAppSelector((state) => state.form);

  return (
    <Paper
      component="form"
      onSubmit={formik.handleSubmit}
      elevation={0}
      variant="outlined"
      sx={{ flex: 1, p: 3, width: "100%" }}
    >
      <Stack spacing={3}>
        <Stack direction="row" spacing={1} alignItems="center">
          <AddCircleOutlineRoundedIcon color="primary" />
          <Typography variant="xl_semibold">
            {editingId ? t("home.form.titleEdit") : t("home.form.titleCreate")}
          </Typography>
        </Stack>

        <FormInput
          label={t("home.form.fields.title")}
          placeholder={t("home.form.placeholders.title")}
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          fullWidth
        />

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <FormInput
            label={t("home.form.fields.amount")}
            type="number"
            inputProps={{ min: 0, step: "0.01" }}
            name="amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            error={formik.touched.amount && Boolean(formik.errors.amount)}
            helperText={formik.touched.amount && formik.errors.amount}
            fullWidth
          />

          <FormInput
            select
            label={t("home.form.fields.category")}
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            fullWidth
          >
            {CATEGORY_OPTIONS.map((option) => (
              <MenuItem key={option} value={option}>
                {t(`home.categories.${option}`)}
              </MenuItem>
            ))}
          </FormInput>
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <ToggleButtonGroup
            color="primary"
            exclusive
            value={formik.values.type}
            onChange={(_event, value: EntryType) => {
              if (value) {
                formik.setFieldValue("type", value);
              }
            }}
            fullWidth
          >
            <ToggleButton value="expense">
              {t("home.form.fields.typeExpense")}
            </ToggleButton>
            <ToggleButton value="income">
              {t("home.form.fields.typeIncome")}
            </ToggleButton>
          </ToggleButtonGroup>

          <FormInput
            label={t("home.form.fields.date")}
            type="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>

        <FormInput
          label={t("home.form.fields.notes")}
          placeholder={t("home.form.placeholders.notes")}
          multiline
          minRows={3}
          name="notes"
          value={formik.values.notes}
          onChange={formik.handleChange}
          fullWidth
        />

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          {editingId && (
            <SharedButton tone="secondary" onClick={onCancel}>
              {t("home.form.actions.cancel")}
            </SharedButton>
          )}
          <SharedButton type="submit" disabled={formik.isSubmitting}>
            {editingId
              ? t("home.form.actions.update")
              : t("home.form.actions.submit")}
          </SharedButton>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default EntryForm;
