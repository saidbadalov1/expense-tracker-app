import { Link as RouterLink } from "react-router-dom";
import { styled, type Theme } from "@mui/material";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  Stack,
  Toolbar,
} from "@mui/material";

export const HeaderBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: "0 1px 0 rgba(15, 23, 42, 0.08)",
}));

export const HeaderToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  minHeight: 76,
  padding: theme.spacing(1, 0),
  gap: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(2),
  },
}));

export const Brand = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(1.5),
}));

export const LogoMark = styled(Box)(({ theme }) => ({
  width: 44,
  height: 44,
  borderRadius: theme.shape.borderRadius,
  background: "linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)",
  display: "grid",
  placeItems: "center",
  color: theme.palette.common.white,
  fontWeight: 700,
  fontSize: 20,
}));

export const NavContainer = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(1),
  flex: 1,
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "flex-start",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const NavButton = styled(Button)<{ active?: boolean }>(
  ({ theme, active }) => ({
    padding: theme.spacing(1, 1.5),
    borderRadius: theme.shape.borderRadius,
    textTransform: "none",
    fontWeight: 500,
    color: active ? theme.palette.primary.main : theme.palette.text.secondary,
    backgroundColor: active ? theme.palette.primary.main + "14" : "transparent",
    "&:hover": {
      backgroundColor: active
        ? theme.palette.primary.main + "1F"
        : theme.palette.action.hover,
    },
  })
);

export const StyledLink = styled(RouterLink)(() => ({
  textDecoration: "none",
  color: "inherit",
}));

export const RightActions = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(1.5),
}));

export const NotificationBadge = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 6,
  right: 6,
  width: 10,
  height: 10,
  borderRadius: "50%",
  backgroundColor: theme.palette.error.main,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export const IconAction = styled(IconButton)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.grey[200]}`,
  backgroundColor: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.grey[100],
  },
}));

export const UserMenuButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  display: "flex",

  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(0.75, 1),
  borderRadius: theme.shape.borderRadius,

  backgroundColor: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.grey[100],
  },
}));

export const UserInfo = styled(Stack)(() => ({
  alignItems: "flex-start",
}));

export const MobileNavTrigger = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "inline-flex",
  },
}));

export const MobileDrawerStyled = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 320,
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
  },
}));

export const MobileDrawerHeader = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(2),
}));

export const MobileDrawerBrand = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(1.5),
}));

export const MobileNavList = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
}));

export const MobileNavButton = styled(ListItemButton)<{ active?: boolean }>(
  ({ theme, active }) => ({
    borderRadius: theme.shape.borderRadius,
    color: active ? theme.palette.primary.main : theme.palette.text.primary,
    backgroundColor: active ? theme.palette.primary.main + "14" : "transparent",
    "&:hover": {
      backgroundColor: active
        ? theme.palette.primary.main + "1F"
        : theme.palette.action.hover,
    },
  })
);

export const MobileSection = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(1.5),
}));

export const MobileDivider = styled(Divider)(() => ({
  margin: 0,
}));

export const paperSx = {
  width: 320,
  maxWidth: "100%",
  mt: 1.5,
  borderRadius: 2,
  boxShadow:
    "0px 10px 30px rgba(15, 23, 42, 0.12), 0px 4px 8px rgba(15, 23, 42, 0.08)",
};

export const listSx = (theme: Theme) => ({
  p: 0,
  "& .MuiMenuItem-root:not(:last-of-type)::after": {
    content: '""',
    display: "block",
    height: 1,
    backgroundColor: theme.palette.grey[100],
    mt: 1.5,
  },
});

export const NotificationItem = (theme: Theme) => ({
  borderRadius: 2,
  border: `1px solid ${theme.palette.grey[200]}`,
  padding: 1.5,
  display: "flex",
  gap: 1,
  alignItems: "flex-start",
  backgroundColor: "grey.50",
});
