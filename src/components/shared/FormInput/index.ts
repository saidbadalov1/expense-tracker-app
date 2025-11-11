import { alpha } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";
import { createElement, forwardRef } from "react";

export type FormInputProps = TextFieldProps;

const baseSx = (theme: Theme) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: Number(theme.shape.borderRadius) * 1.25,
    backgroundColor: theme.palette.common.white,
    transition: theme.transitions.create(["border-color", "box-shadow"], {
      duration: theme.transitions.duration.short,
    }),
    "& fieldset": {
      borderColor: theme.palette.grey[200],
    },
    "&:hover fieldset": {
      borderColor: theme.palette.primary.light,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.16)}`,
    },
    "&.Mui-error fieldset": {
      borderColor: theme.palette.error.main,
      boxShadow: `0 0 0 3px ${alpha(theme.palette.error.main, 0.12)}`,
    },
    "&.Mui-disabled": {
      backgroundColor: alpha(theme.palette.action.disabledBackground, 0.35),
      color: theme.palette.text.disabled,
    },
  },
  "& .MuiOutlinedInput-input": {
    padding: theme.spacing(1.5, 2),
    fontSize: 16,
    lineHeight: 1.4,
  },
  "& .MuiInputLabel-root": {
    fontSize: 16,
    fontWeight: 500,
    color: theme.palette.text.secondary,
  },
  "& .MuiFormHelperText-root": {
    marginLeft: 0,
    marginRight: 0,
    marginTop: theme.spacing(0.75),
    fontSize: 12,
  },
});

const focusResetSx = (theme: Theme) => ({
  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
    boxShadow: "none",
    borderColor: theme.palette.primary.main,
  },
});

const extendSx = (incoming?: SxProps<Theme>): SxProps<Theme> => {
  const baseArray = [baseSx, focusResetSx];
  const extras = Array.isArray(incoming)
    ? incoming
    : incoming
    ? [incoming]
    : [];

  return [...baseArray, ...extras] as SxProps<Theme>;
};

const FormInput = forwardRef<HTMLDivElement, FormInputProps>(function FormInput(
  {
    InputLabelProps,
    sx,
    variant = "outlined",
    fullWidth = true,

    ...rest
  },
  ref
) {
  const labelProps = {
    shrink: InputLabelProps?.shrink ?? true,
    ...InputLabelProps,
  };

  const computedSx = extendSx(sx);

  return createElement(TextField, {
    ...rest,
    ref,
    variant,
    fullWidth,
    InputLabelProps: labelProps,
    sx: computedSx,
  });
});

export default FormInput;
