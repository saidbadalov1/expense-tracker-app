import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "@/translations/en.json";
import azTranslations from "@/translations/az.json";
import { LANGUAGE_STORAGE_KEY } from "@/constants";

const getStoredLanguage = () => {
  if (typeof window === "undefined") {
    return undefined;
  }

  return window.localStorage.getItem(LANGUAGE_STORAGE_KEY) ?? undefined;
};

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: getStoredLanguage(),
  resources: {
    en: { translation: enTranslations },
    az: { translation: azTranslations },
  },
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (language) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
});

export default i18n;
