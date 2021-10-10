import { createContext, useState, ReactNode, useContext } from 'react';
import { Country, Region } from '../types/Countries';
import { useAppContext } from './AppContext';

type Props = {
  children: ReactNode;
};

type Context = {
  countries: Country[] | null;
  error: string | null;
  getAllCountries: () => void;
  searchCountriesByName: (name: string) => void;
  filterCountreisByRegion: (region: Region) => void;
};
const CountriesContext = createContext<Context | null>(null);

export const CountriesContextProvider = ({ children }: Props) => {
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const appContext = useAppContext();

  const getAllCountries = async () => {
    try {
      const data = await appContext.get<Country[]>('/all');
      setCountries(data);
      setError(null);
    } catch (error: any) {
      if (error.response.status === 404) {
        setCountries(null);
        setError('No Countries Found');
      }
    }
  };

  const searchCountriesByName = async (name: string) => {
    try {
      const data = await appContext.get<Country[]>(`/name/${name}`);
      setCountries(data);
      setError(null);
    } catch (error: any) {
      if (error.response.status === 404) {
        setCountries(null);
        setError('No Countries Matches Your Search, Try Again!');
      }
    }
  };

  const filterCountreisByRegion = async (region: Region) => {
    try {
      const data = await appContext.get<Country[]>(`/region/${region}`);
      setCountries(data);
      setError(null);
    } catch (error: any) {
      if (error.response.status === 404) {
        setCountries(null);
        setError('No Countries Matches Your Search, Try Again!');
      }
    }
  };

  return (
    <CountriesContext.Provider
      value={{
        countries,
        error,
        getAllCountries,
        filterCountreisByRegion,
        searchCountriesByName,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountriesContext = () => {
  const context = useContext(CountriesContext);
  if (!context)
    throw Error(
      'Error: Cannot use CountreisContext outside CountriesContextProvider'
    );

  return context;
};
