export const formatNumber = (number?: number) =>
  number ? Number(number).toLocaleString() : '-';
