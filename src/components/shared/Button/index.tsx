import { forwardRef } from "react";
import MuiButton from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";
import type { SxProps, Theme } from "@mui/material/styles";

type ButtonTone = "primary" | "secondary" | "danger";

export interface SharedButtonProps extends ButtonProps {
  tone?: ButtonTone;
  rounded?: "md" | "lg" | "xl";
}

const baseSx: SxProps<Theme> = (theme) => ({
  textTransform: "none",
  fontWeight: 600,
  fontSize: 14,
  lineHeight: 1.25,
  padding: theme.spacing(1.25, 3),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  boxShadow: "none",
  transition: theme.transitions.create(["transform", "box-shadow"], {
    duration: theme.transitions.duration.short,
  }),
  "&:hover": {
    boxShadow: "0px 12px 24px rgba(15, 23, 42, 0.12)",
    transform: "translateY(-1px)",
  },
  "&:active": {
    transform: "translateY(0)",
    boxShadow: "0px 8px 16px rgba(15, 23, 42, 0.08)",
  },
  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.6,
    boxShadow: "none",
    transform: "none",
  },
});

const toneStyles: Record<ButtonTone, SxProps<Theme>> = {
  primary: (theme) => ({
    background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)",
    color: theme.palette.common.white,
    "&:hover": {
      background: "linear-gradient(135deg, #4F46E5 0%, #0EA5E9 100%)",
    },
  }),
  secondary: (theme) => ({
    backgroundColor: theme.palette.grey[100],
    color: theme.palette.text.primary,
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  }),
  danger: (theme) => ({
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.error.dark,
    },
  }),
};

const radiusMap: Record<NonNullable<SharedButtonProps["rounded"]>, number> = {
  md: 1,
  lg: 1.5,
  xl: 2,
};

const toArray = (value?: SxProps<Theme>): SxProps<Theme>[] =>
  value ? (Array.isArray(value) ? value : [value]) : [];

const SharedButton = forwardRef<HTMLButtonElement, SharedButtonProps>(
  function SharedButton(
    { tone = "primary", rounded = "lg", sx, ...rest },
    ref
  ) {
    const radiusValue = radiusMap[rounded];
    const radiusSx: SxProps<Theme> = (theme) => ({
      borderRadius: Number(theme.shape.borderRadius) * radiusValue,
    });

    const composedSx: SxProps<Theme>[] = [
      ...toArray(baseSx),
      ...toArray(radiusSx),
      ...toArray(toneStyles[tone]),
      ...toArray(sx),
    ];

    return (
      <MuiButton
        ref={ref}
        disableElevation
        {...rest}
        sx={composedSx as SxProps<Theme>}
      />
    );
  }
);

export default SharedButton;
