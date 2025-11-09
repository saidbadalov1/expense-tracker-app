import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HeaderBar, HeaderToolbar } from "./header.styled";
import BrandSection from "./BrandSection";
import NavLinks from "./NavLinks";
import ActionButtons from "./ActionButtons";
import LanguageMenu from "./LanguageMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileNavigate = (to: string) => {
    navigate(to);
    setMobileOpen(false);
  };

  return (
    <HeaderBar elevation={0} position="static">
      <HeaderToolbar disableGutters className="container">
        <BrandSection />
        <NavLinks activePath={location.pathname} />
        <LanguageMenu placement="desktop" />
        <ActionButtons onOpenMobile={() => setMobileOpen(true)} />
      </HeaderToolbar>

      <MobileMenu
        open={mobileOpen}
        activePath={location.pathname}
        onNavigate={handleMobileNavigate}
        onClose={() => setMobileOpen(false)}
        languageMenu={<LanguageMenu placement="mobile" />}
      />
    </HeaderBar>
  );
};

export default Header;
