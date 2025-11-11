import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { normalizeLanguage } from "./utils";
import type { LANGUAGE_CODE } from "@/types/header.types";
import { AVAILABLE_LANGUAGES } from "./constants";
import { paperSx } from "./header.styled";

interface LanguageMenuProps {
  placement: "desktop" | "mobile";
}

const LanguageMenu = ({ placement }: LanguageMenuProps) => {
  const { i18n, t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const open = Boolean(anchorEl);

  const currentLanguage = normalizeLanguage(i18n.language);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (language: LANGUAGE_CODE) => {
    i18n.changeLanguage(language);
    handleClose();
  };

  const isPlacementMobile = placement === "mobile";

  const renderTrigger = () => (
    <Tooltip title={t("language.switcherLabel")} arrow>
      <IconButton
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        aria-controls="header-language-menu"
        onClick={handleOpen}
        color="inherit"
        size={isPlacementMobile ? "large" : "medium"}
        sx={{
          padding: isPlacementMobile ? 1.5 : 1,
          border: !isPlacementMobile
            ? `1px solid ${theme.palette.grey[200]}`
            : undefined,
          borderRadius: theme.shape.borderRadius,
        }}
      >
        <TranslateRoundedIcon />
        {!isPlacementMobile && (
          <Typography variant="xs_semibold" sx={{ marginLeft: 1 }}>
            {currentLanguage.toUpperCase()}
          </Typography>
        )}
      </IconButton>
    </Tooltip>
  );

  if (!isPlacementMobile && !isDesktop) {
    return null;
  }

  return (
    <>
      {renderTrigger()}
      <Menu
        id="header-language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            sx: paperSx,
          },
        }}
      >
        <Stack direction="column" px={2} py={1.5} spacing={0.5}>
          <Typography variant="s_semibold">
            {t("language.menuTitle")}
          </Typography>
          <Typography variant="xs_medium" color="text.secondary">
            {t("language.menuSubtitle")}
          </Typography>
        </Stack>

        {AVAILABLE_LANGUAGES.map((code) => (
          <MenuItem
            key={code}
            selected={currentLanguage === code}
            onClick={() => handleChangeLanguage(code as LANGUAGE_CODE)}
            sx={{ py: 1.5, px: 2 }}
          >
            <ListItemIcon>
              <Typography variant="xs_semibold" textTransform="uppercase">
                {code}
              </Typography>
            </ListItemIcon>
            <ListItemText
              slotProps={{
                primary: {
                  variant: "s_medium",
                },
              }}
              primary={t(`language.options.${code}`)}
            />
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageMenu;
