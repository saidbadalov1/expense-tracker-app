import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const HomeTitle = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        {t("home.title")}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {t("home.subtitle")}
      </Typography>
    </Box>
  );
};

export default HomeTitle;
