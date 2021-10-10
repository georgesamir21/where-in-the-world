export const formatNumber = (number?: number) =>
  number ? Number(number).toLocaleString() : 'N/A';
