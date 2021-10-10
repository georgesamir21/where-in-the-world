import { ChangeEvent, useEffect } from 'react';
import { debounce } from 'lodash';
import { CountryCard } from '../CountryCard';
import { useCountriesContext } from '../../contexts/CountriesContext';
import './style.scss';

export const CountriesList = () => {
  const {
    countries,
    error,
    getAllCountries,
    filterCountreisByRegion,
    searchCountriesByName,
  } = useCountriesContext();

  useEffect(() => {
    getAllCountries();
  }, []);

  const regions = [
    {
      label: 'Africa',
      value: 'africa',
    },
    {
      label: 'America',
      value: 'america',
    },
    {
      label: 'Asia',
      value: 'asia',
    },
    {
      label: 'Europe',
      value: 'europe',
    },
    {
      label: 'Ocenia',
      value: 'ocenia',
    },
  ];

  const handleCountriesSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const countryName = e.target.value;
    searchCountriesByName(countryName);
  };

  const handleRegionSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value;
    //@ts-ignore
    filterCountreisByRegion(region);
  };
  if (!countries && !error) return <h2>Loading...</h2>;
  return (
    <>
      <section className="search-and-filter d-flex-row margin-b-2em">
        <input
          className="search-bar"
          type="text"
          name="country"
          placeholder="Search for a country..."
          onChange={debounce(handleCountriesSearchChange, 500)}
        />
        <select
          onChange={(e) => handleRegionSelectionChange(e)}
          name="region"
          placeholder="Filter by Region"
        >
          {regions.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </section>
      {countries?.length && (
        <section className="countries">
          {countries.map((c) => (
            <CountryCard key={c.name} {...c} />
          ))}
        </section>
      )}
      {error && <h2>{error}</h2>}
    </>
  );
};
