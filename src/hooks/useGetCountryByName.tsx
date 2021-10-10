import { Country } from '../types/Countries';
import { useGet } from './useGet';

export const useGetCountryDetails = (countryName: string) => {
  return useGet<Country[]>(`/capital/${countryName}`);
};
