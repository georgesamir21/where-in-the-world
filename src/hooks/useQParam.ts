import { useLocation } from 'react-router-dom';

export const useQParam = (name: string | null): string | null => {
  const location = useLocation();

  if (!name) return null;

  const query = new URLSearchParams(location.search);

  return query.get(name);
};
