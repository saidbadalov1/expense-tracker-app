import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "@/translations/en.json";
import azTranslations from "@/translations/az.json";

i18n.use(initReactI18next).init({
  fallbackLng: localStorage.getItem("language") || "en",
  resources: {
    en: { translation: enTranslations },
    az: { translation: azTranslations },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
