export const getNumber: (str: string) => number = str =>
  Number(String(str).replace(/[^\d.]/g, "")) || 0;
