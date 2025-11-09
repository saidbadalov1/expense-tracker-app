import { memo } from "react";
import { Link } from "react-router-dom";
import useIsMobile from "@/hooks/useIsMobile";
import { HEADER_BRAND } from "./constants";
import { Brand, LogoMark, UserInfo } from "./header.styled";
import { Typography } from "@mui/material";
import { getLogoMark } from "@/utils";

const BrandSection = () => {
  const isMobile = useIsMobile();
  const logoMark = getLogoMark(HEADER_BRAND.title);

  return (
    <Link to="/">
      <Brand>
        <LogoMark>{logoMark}</LogoMark>
        {!isMobile && (
          <UserInfo spacing={0}>
            <Typography variant="s_semibold">{HEADER_BRAND.title}</Typography>
          </UserInfo>
        )}
      </Brand>
    </Link>
  );
};

export default memo(BrandSection);
