import { createTheme } from "@mui/material/styles";
import { ColorTheme } from "./constants";
import type { ThemeOptions } from "@mui/material/styles";

const theme = createTheme({
  ...(ColorTheme as ThemeOptions),
  typography: {
    fontFamily: "Poppins, sans-serif",
    "7xl_regular": {
      fontSize: "48px",
      fontWeight: 400,
      lineHeight: "60px",
    },
    "7xl_medium": {
      fontSize: "48px",
      fontWeight: 500,
      lineHeight: "60px",
    },
    "7xl_semibold": {
      fontSize: "48px",
      fontWeight: 600,
      lineHeight: "60px",
    },
    "7xl_bold": {
      fontSize: "48px",
      fontWeight: 700,
      lineHeight: "60px",
    },
    "6xl_regular": {
      fontSize: "40px",
      fontWeight: 400,
      lineHeight: "56px",
    },
    "6xl_medium": {
      fontSize: "40px",
      fontWeight: 500,
      lineHeight: "56px",
    },
    "6xl_semibold": {
      fontSize: "40px",
      fontWeight: 600,
      lineHeight: "56px",
    },
    "6xl_bold": {
      fontSize: "40px",
      fontWeight: 700,
      lineHeight: "56px",
    },
    "5xl_regular": {
      fontSize: "36px",
      fontWeight: 400,
      lineHeight: "48px",
    },
    "5xl_medium": {
      fontSize: "36px",
      fontWeight: 500,
      lineHeight: "48px",
    },
    "5xl_semibold": {
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "48px",
    },
    "5xl_bold": {
      fontSize: "36px",
      fontWeight: 700,
      lineHeight: "48px",
    },
    "4xl_regular": {
      fontSize: "32px",
      fontWeight: 400,
      lineHeight: "48px",
    },
    "4xl_medium": {
      fontSize: "32px",
      fontWeight: 500,
      lineHeight: "48px",
    },
    "4xl_semibold": {
      fontSize: "32px",
      fontWeight: 600,
      lineHeight: "48px",
    },
    "4xl_bold": {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "48px",
    },
    "3xl_regular": {
      fontSize: "28px",
      fontWeight: 400,
      lineHeight: "48px",
    },
    "3xl_medium": {
      fontSize: "28px",
      fontWeight: 500,
      lineHeight: "48px",
    },
    "3xl_semibold": {
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: "48px",
    },
    "3xl_bold": {
      fontSize: "28px",
      fontWeight: 700,
      lineHeight: "48px",
    },
    xxl_regular: {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "48px",
    },
    xxl_medium: {
      fontSize: "24px",
      fontWeight: 500,
      lineHeight: "48px",
    },
    xxl_semibold: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: "48px",
    },
    xxl_bold: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "48px",
    },
    xl_regular: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "32px",
    },
    xl_medium: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "32px",
    },
    xl_semibold: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "32px",
    },
    xl_bold: {
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "32px",
    },
    l_regular: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: "28px",
    },
    l_medium: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: "28px",
    },
    l_semibold: {
      fontSize: "18px",
      fontWeight: 600,
      lineHeight: "28px",
    },
    l_bold: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "28px",
    },
    m_regular: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    m_medium: {
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    m_semibold: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    m_bold: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "24px",
    },
    s_regular: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "24px",
    },
    s_medium: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "24px",
    },
    s_semibold: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "24px",
    },
    s_bold: {
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "24px",
    },
    xs_regular: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "16px",
    },
    xs_medium: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px",
    },
    xs_semibold: {
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "16px",
    },
    xs_bold: {
      fontSize: "12px",
      fontWeight: 700,
      lineHeight: "16px",
    },
    xxs_regular: {
      fontSize: "10px",
      fontWeight: 400,
      lineHeight: "12px",
    },
    xxs_medium: {
      fontSize: "10px",
      fontWeight: 500,
      lineHeight: "12px",
    },
    xxs_semibold: {
      fontSize: "10px",
      fontWeight: 600,
      lineHeight: "12px",
    },
    xxs_bold: {
      fontSize: "10px",
      fontWeight: 700,
      lineHeight: "12px",
    },
  },
});

export default theme;
