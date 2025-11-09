import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    blue: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    gray: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    primary: {
      black: string;
      white: string;
    };
    secondary: {
      green: string;
      greenAlpha: string;
      red: string;
      redAlpha: string;
      orange: string;
      orangeAlpha: string;
    };
  }
  interface PaletteOptions {
    blue: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    gray: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    primary: {
      black: string;
      white: string;
    };
    secondary: {
      green: string;
      greenAlpha: string;
      red: string;
      redAlpha: string;
      orange: string;
      orangeAlpha: string;
    };
  }
  interface TypographyVariants {
    "7xl_regular": React.CSSProperties;
    "7xl_medium"?: React.CSSProperties;
    "7xl_semibold"?: React.CSSProperties;
    "7xl_bold"?: React.CSSProperties;

    "6xl_regular": React.CSSProperties;
    "6xl_medium"?: React.CSSProperties;
    "6xl_semibold"?: React.CSSProperties;
    "6xl_bold"?: React.CSSProperties;

    "5xl_regular": React.CSSProperties;
    "5xl_medium"?: React.CSSProperties;
    "5xl_semibold"?: React.CSSProperties;
    "5xl_bold"?: React.CSSProperties;

    "4xl_regular": React.CSSProperties;
    "4xl_medium"?: React.CSSProperties;
    "4xl_semibold"?: React.CSSProperties;
    "4xl_bold"?: React.CSSProperties;

    "4xl_regular": React.CSSProperties;
    "4xl_medium"?: React.CSSProperties;
    "4xl_semibold"?: React.CSSProperties;
    "4xl_bold"?: React.CSSProperties;

    "3xl_regular"?: React.CSSProperties;
    "3xl_medium"?: React.CSSProperties;
    "3xl_semibold"?: React.CSSProperties;
    "3xl_bold"?: React.CSSProperties;

    xxl_regular: React.CSSProperties;
    xxl_medium?: React.CSSProperties;
    xxl_semibold?: React.CSSProperties;
    xxl_bold?: React.CSSProperties;

    xl_regular: React.CSSProperties;
    xl_medium?: React.CSSProperties;
    xl_semibold?: React.CSSProperties;
    xl_bold?: React.CSSProperties;

    l_regular: React.CSSProperties;
    l_medium?: React.CSSProperties;
    l_semibold?: React.CSSProperties;
    l_bold?: React.CSSProperties;

    m_regular: React.CSSProperties;
    m_medium?: React.CSSProperties;
    m_semibold?: React.CSSProperties;
    m_bold?: React.CSSProperties;

    s_regular: React.CSSProperties;
    s_medium?: React.CSSProperties;
    s_semibold?: React.CSSProperties;
    s_bold?: React.CSSProperties;

    xs_regular: React.CSSProperties;
    xs_medium?: React.CSSProperties;
    xs_semibold?: React.CSSProperties;
    xs_bold?: React.CSSProperties;

    xxs_regular: React.CSSProperties;
    xxs_medium?: React.CSSProperties;
    xxs_semibold?: React.CSSProperties;
    xxs_bold?: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    "7xl_regular"?: React.CSSProperties;
    "7xl_medium"?: React.CSSProperties;
    "7xl_semibold"?: React.CSSProperties;
    "7xl_bold"?: React.CSSProperties;

    "6xl_regular": React.CSSProperties;
    "6xl_medium"?: React.CSSProperties;
    "6xl_semibold"?: React.CSSProperties;
    "6xl_bold"?: React.CSSProperties;

    "5xl_regular": React.CSSProperties;
    "5xl_medium"?: React.CSSProperties;
    "5xl_semibold"?: React.CSSProperties;
    "5xl_bold"?: React.CSSProperties;

    "4xl_regular": React.CSSProperties;
    "4xl_medium"?: React.CSSProperties;
    "4xl_semibold"?: React.CSSProperties;
    "4xl_bold"?: React.CSSProperties;

    "3xl_regular"?: React.CSSProperties;
    "3xl_medium"?: React.CSSProperties;
    "3xl_semibold"?: React.CSSProperties;
    "3xl_bold"?: React.CSSProperties;

    xxl_regular: React.CSSProperties;
    xxl_medium?: React.CSSProperties;
    xxl_semibold?: React.CSSProperties;
    xxl_bold?: React.CSSProperties;

    xl_regular: React.CSSProperties;
    xl_medium?: React.CSSProperties;
    xl_semibold?: React.CSSProperties;
    xl_bold?: React.CSSProperties;

    l_regular: React.CSSProperties;
    l_medium?: React.CSSProperties;
    l_semibold?: React.CSSProperties;
    l_bold?: React.CSSProperties;

    m_regular: React.CSSProperties;
    m_medium?: React.CSSProperties;
    m_semibold?: React.CSSProperties;
    m_bold?: React.CSSProperties;

    s_regular: React.CSSProperties;
    s_medium?: React.CSSProperties;
    s_semibold?: React.CSSProperties;
    s_bold?: React.CSSProperties;

    xs_regular: React.CSSProperties;
    xs_medium?: React.CSSProperties;
    xs_semibold?: React.CSSProperties;
    xs_bold?: React.CSSProperties;

    xxs_regular: React.CSSProperties;
    xxs_medium?: React.CSSProperties;
    xxs_semibold?: React.CSSProperties;
    xxs_bold?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "7xl_regular": true;
    "7xl_medium"?: true;
    "7xl_semibold"?: true;
    "7xl_bold"?: true;

    "6xl_regular": true;
    "6xl_medium"?: true;
    "6xl_semibold"?: true;
    "6xl_bold"?: true;

    "5xl_regular": true;
    "5xl_medium"?: true;
    "5xl_semibold"?: true;
    "5xl_bold"?: true;

    "4xl_regular": true;
    "4xl_medium"?: true;
    "4xl_semibold"?: true;
    "4xl_bold"?: true;

    "4xl_regular": true;
    "4xl_medium"?: true;
    "4xl_semibold"?: true;
    "4xl_bold"?: true;

    "3xl_regular"?: true;
    "3xl_medium"?: true;
    "3xl_semibold"?: true;
    "3xl_bold"?: true;

    xxl_regular: true;
    xxl_medium?: true;
    xxl_semibold?: true;
    xxl_bold?: true;

    xl_regular: true;
    xl_medium?: true;
    xl_semibold?: true;
    xl_bold?: true;

    l_regular: true;
    l_medium?: true;
    l_semibold?: true;
    l_bold?: true;

    m_regular: true;
    m_medium?: true;
    m_semibold?: true;
    m_bold?: true;

    s_regular: true;
    s_medium?: true;
    s_semibold?: true;
    s_bold?: true;

    xs_regular: true;
    xs_medium?: true;
    xs_semibold?: true;
    xs_bold?: true;

    xxs_regular: true;
    xxs_medium?: true;
    xxs_semibold?: true;
    xxs_bold?: true;
  }
}
