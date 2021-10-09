import { Country } from '../types/Countries';
import { useGet } from './useGet';

export const useGetCountries = () => {
  return useGet<Country[]>('/all');
};
