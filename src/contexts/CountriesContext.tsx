import { createContext, useState, ReactNode, useContext } from 'react';
import { Country } from '../types/Countries';
import { useAppContext } from './AppContext';

type Region = 'asia' | 'africa' | 'america' | 'ocenia' | 'europe';

type Props = {
  children: ReactNode;
};

type Context = {
  countries: Country[] | null;
  getAllCountries: () => void;
  searchCountriesByName: (name: string) => void;
  filterCountreisByRegion: (region: Region) => void;
};
const CountriesContext = createContext<Context | null>(null);

export const CountriesContextProvider = ({ children }: Props) => {
  const [countries, setCountries] = useState<Country[] | null>(null);
  const appContext = useAppContext();

  const getAllCountries = async () => {
    const data = await appContext.get<Country[]>('/all');
    setCountries(data);
  };

  const searchCountriesByName = async (name: string) => {
    const data = await appContext.get<Country[]>(`/name/${name}`);
    setCountries(data);
  };

  const filterCountreisByRegion = async (region: Region) => {
    const data = await appContext.get<Country[]>(`/region/${region}`);
    setCountries(data);
  };

  return (
    <CountriesContext.Provider
      value={{
        countries,
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
