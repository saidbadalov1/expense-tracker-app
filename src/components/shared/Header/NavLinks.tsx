import { memo } from "react";
import { HEADER_ACTIONS } from "./constants";
import { NavButton, NavContainer, StyledLink } from "./header.styled";
import { useTranslation } from "react-i18next";

interface NavLinksProps {
  activePath: string;
}

const NavLinks = ({ activePath }: NavLinksProps) => {
  const { t } = useTranslation();

  return (
    <NavContainer>
      {HEADER_ACTIONS.map((action) => (
        <StyledLink key={action.label} to={action.to}>
          <NavButton active={activePath === action.to}>
            {t(action.label)}
          </NavButton>
        </StyledLink>
      ))}
    </NavContainer>
  );
};

export default memo(NavLinks);
