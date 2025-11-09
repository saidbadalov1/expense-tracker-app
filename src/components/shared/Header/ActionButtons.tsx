import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Avatar, Skeleton, Typography } from "@mui/material";

import useIsMobile from "@/hooks/useIsMobile";
import { useGetCurrentUserQuery } from "@/store/services/userApi";
import { getApiErrorMessage } from "@/store/services/utils";
import {
  MobileNavTrigger,
  RightActions,
  UserInfo,
  UserMenuButton,
} from "./header.styled";
import NotificationsMenu from "./NotificationsMenu";
import { useTranslation } from "react-i18next";

interface ActionButtonsProps {
  onOpenMobile: () => void;
}

const ActionButtons = ({ onOpenMobile }: ActionButtonsProps) => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { data: user, isLoading, isError, error } = useGetCurrentUserQuery();

  const hasUser = Boolean(user);
  const userName = hasUser ? user?.name ?? t("user.name") : t("user.guest");
  const avatarSrc = user?.avatar ?? "";
  const errorMessage = isError ? getApiErrorMessage(error) : null;
  const userInitial = isLoading ? "" : user?.name?.[0] ?? "G";

  const renderUserContent = () => {
    if (isLoading) {
      return <Skeleton variant="text" width={70} height={16} />;
    }

    if (isError) {
      return (
        <Typography variant="xs_semibold" color="text.secondary">
          {errorMessage}
        </Typography>
      );
    }

    if (!hasUser) {
      return (
        <Typography variant="xs_semibold" color="text.secondary">
          Guest
        </Typography>
      );
    }

    return <Typography variant="xs_semibold">{userName}</Typography>;
  };

  return (
    <RightActions>
      <NotificationsMenu />
      <UserMenuButton>
        <Avatar src={avatarSrc} alt={userName}>
          {!avatarSrc && userInitial}
        </Avatar>

        {!isMobile && (
          <UserInfo sx={{ minWidth: 80 }} spacing={0}>
            {renderUserContent()}
          </UserInfo>
        )}
      </UserMenuButton>

      <MobileNavTrigger onClick={onOpenMobile}>
        <MenuRoundedIcon />
      </MobileNavTrigger>
    </RightActions>
  );
};

export default ActionButtons;
