import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { HEADER_ACTIONS, HEADER_BRAND } from "./constants";
import {
  LogoMark,
  MobileDivider,
  MobileDrawerBrand,
  MobileDrawerHeader,
  MobileDrawerStyled,
  MobileNavButton,
  MobileNavList,
  MobileSection,
  NotificationItem,
  UserInfo,
  UserMenuButton,
} from "./header.styled";
import { formatDate, getLogoMark } from "@/utils";
import {
  useGetCurrentUserQuery,
  useGetNotificationsQuery,
} from "@/store/services/userApi";
import { getApiErrorMessage } from "@/store/services/utils";
import { useTranslation } from "react-i18next";
import type { ReactNode } from "react";

interface MobileMenuProps {
  open: boolean;
  activePath: string;
  onClose: () => void;
  onNavigate: (to: string) => void;
  languageMenu?: ReactNode;
}

const MobileMenu = ({
  open,
  activePath,
  onClose,
  onNavigate,
  languageMenu,
}: MobileMenuProps) => {
  const logoMark = getLogoMark(HEADER_BRAND.title);
  const theme = useTheme();
  const { data: user, isLoading, isError, error } = useGetCurrentUserQuery();
  const { data: notifications } = useGetNotificationsQuery();
  const { t } = useTranslation();

  const errorMessage = isError ? getApiErrorMessage(error) : null;
  const hasUser = Boolean(user);
  const userInitial = isLoading ? "" : user?.name?.[0] ?? "G";

  const renderUserDetails = () => {
    if (isLoading) {
      return (
        <>
          <Skeleton variant="text" width={120} height={20} />
          <Skeleton variant="text" width={80} height={18} />
        </>
      );
    }

    if (isError) {
      return (
        <Typography variant="xs_medium" color="text.secondary">
          {errorMessage}
        </Typography>
      );
    }

    if (!hasUser) {
      return (
        <>
          <Typography variant="s_semibold">{t("user.guest")}</Typography>
          <Typography variant="xs_medium" color="text.secondary">
            {t("user.signInMessage")}
          </Typography>
        </>
      );
    }

    return (
      <>
        <Typography variant="s_semibold">{user?.name}</Typography>
        <Typography variant="xs_medium">{user?.role}</Typography>
      </>
    );
  };

  return (
    <MobileDrawerStyled
      anchor="right"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      sx={{ display: { md: "none" } }}
    >
      <MobileDrawerHeader>
        <MobileDrawerBrand>
          <LogoMark>{logoMark}</LogoMark>
          <UserInfo spacing={0}>
            <Typography variant="m_semibold">{HEADER_BRAND.title}</Typography>
          </UserInfo>
        </MobileDrawerBrand>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          {languageMenu}
          <Tooltip title={t("closeMenu")} arrow>
            <IconButton onClick={onClose}>
              <CloseRoundedIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </MobileDrawerHeader>

      <MobileDivider />
      <MobileNavList disablePadding>
        {HEADER_ACTIONS.map((action) => (
          <MobileNavButton
            key={action.label}
            active={activePath === action.to}
            onClick={() => onNavigate(action.to)}
          >
            <ListItemText
              primary={t(action.label)}
              slotProps={{ primary: { variant: "m_semibold" } }}
            />
          </MobileNavButton>
        ))}
      </MobileNavList>
      <MobileDivider />
      <MobileSection spacing={1.5}>
        <Typography variant="xs_medium" color="text.secondary">
          Latest alerts
        </Typography>

        {notifications?.map((notification) => (
          <Box key={notification.id} sx={NotificationItem(theme)}>
            <Stack direction="column" gap={1}>
              <Typography variant="s_medium" color="text.primary">
                {notification.title}
              </Typography>
              <Typography variant="xs_medium" color="text.secondary">
                {formatDate(notification.timestamp)}
              </Typography>
            </Stack>
          </Box>
        ))}
      </MobileSection>
      <MobileDivider />
      <MobileSection>
        <UserMenuButton fullWidth>
          <Badge
            overlap="circular"
            color="success"
            variant="dot"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Avatar
              src={user?.avatar ?? ""}
              alt={user?.name ?? "User avatar"}
              sx={{ width: 40, height: 40 }}
            >
              {!user?.avatar && userInitial}
            </Avatar>
          </Badge>
          <UserInfo spacing={0}>{renderUserDetails()}</UserInfo>
        </UserMenuButton>
      </MobileSection>
    </MobileDrawerStyled>
  );
};

export default MobileMenu;
