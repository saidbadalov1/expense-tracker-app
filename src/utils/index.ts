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
