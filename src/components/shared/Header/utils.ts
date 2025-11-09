import { AVAILABLE_LANGUAGES } from "./constants";
import type { LANGUAGE_CODE } from "@/types/header.types";

export const normalizeLanguage = (value: string): LANGUAGE_CODE => {
  const shortCode = value.split("-")[0] as LANGUAGE_CODE;
  return AVAILABLE_LANGUAGES.includes(shortCode) ? shortCode : "en";
};
