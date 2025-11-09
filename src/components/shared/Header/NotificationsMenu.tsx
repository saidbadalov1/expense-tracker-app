import {
  Badge,
  Box,
  Divider,
  Menu,
  MenuItem,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { getApiErrorMessage } from "@/store/services/utils";
import { formatDate } from "@/utils";
import {
  IconAction,
  listSx,
  NotificationBadge,
  paperSx,
} from "./header.styled";
import { useGetNotificationsQuery } from "@/store/services/userApi";
import { useState } from "react";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import { useTranslation } from "react-i18next";

const NotificationsMenu = () => {
  const { t } = useTranslation();
  const [notificationAnchorEl, setNotificationAnchorEl] =
    useState<HTMLElement | null>(null);
  const isNotificationMenuOpen = Boolean(notificationAnchorEl);

  const {
    data: notifications,
    isLoading,
    isError,
    error,
  } = useGetNotificationsQuery();

  const handleOpenNotifications = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setNotificationAnchorEl(event.currentTarget);
  };

  const handleCloseNotifications = () => {
    setNotificationAnchorEl(null);
  };

  if (isLoading) {
    return (
      <Skeleton
        variant="rectangular"
        width={42}
        height={42}
        sx={{ borderRadius: "4px" }}
      />
    );
  }

  if (isError) {
    return (
      <Box px={2} py={1.5}>
        <Typography variant="xs_medium" color="text.secondary">
          {getApiErrorMessage(error)}
        </Typography>
      </Box>
    );
  }

  if (!notifications || notifications.length === 0) {
    return (
      <Box px={2} py={1.5}>
        <Typography variant="xs_medium" color="text.secondary">
          {t("notifications.empty")}
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <IconAction
        aria-haspopup="true"
        aria-controls={
          isNotificationMenuOpen ? "header-notifications" : undefined
        }
        aria-expanded={isNotificationMenuOpen ? "true" : undefined}
        onClick={handleOpenNotifications}
      >
        <Badge
          color="error"
          variant="dot"
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <NotificationsNoneRoundedIcon />
        </Badge>
        <NotificationBadge />
      </IconAction>

      <Menu
        id="header-notifications"
        anchorEl={notificationAnchorEl}
        open={isNotificationMenuOpen}
        onClose={handleCloseNotifications}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            sx: paperSx,
          },
          list: {
            sx: listSx,
          },
        }}
      >
        <Box px={2} py={1.5}>
          <Typography variant="s_semibold" color="text.primary">
            {t("notifications.menuTitle")}
          </Typography>
        </Box>
        <Divider sx={{ m: 0 }} />
        {notifications.map((notification) => (
          <MenuItem
            key={notification.id}
            sx={{ gap: 1.5, py: 1.5, px: 2, alignItems: "flex-start" }}
          >
            <Stack spacing={0.5}>
              <Typography variant="s_medium" color="text.primary">
                {notification.title}
              </Typography>
              <Typography variant="xs_medium" color="text.secondary">
                {formatDate(notification.timestamp)}
              </Typography>
            </Stack>
          </MenuItem>
        ))}
        <Divider sx={{ m: 0 }} />
        <Box px={2} py={1.5}>
          <Typography
            variant="xs_semibold"
            color="primary.main"
            sx={{ cursor: "pointer" }}
            onClick={handleCloseNotifications}
          >
            {t("notifications.viewAll")}
          </Typography>
        </Box>
      </Menu>
    </>
  );
};

export default NotificationsMenu;
