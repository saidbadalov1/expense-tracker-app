import i18n from "@/i18n";

export const getLogoMark = (fullName: string) => {
  return fullName
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();
};

export const formatDate = (timestamp: string) => {
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const localeFormatter = () => {
  return new Intl.NumberFormat(i18n.language, {
    style: "currency",
    currency: "AZN",
  });
};

export const dateFormatter = () => {
  return new Intl.DateTimeFormat(i18n.language, {
    dateStyle: "medium",
  });
};
