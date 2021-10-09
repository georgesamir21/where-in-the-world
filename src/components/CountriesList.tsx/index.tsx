import { ChangeEvent } from 'react';
import { useGetCountries } from '../../hooks/useGetCountries';
import { CountryCard } from '../CountryCard';
import './style.scss';

export const CountriesList = () => {
  const countries = useGetCountries();
  console.log(countries);
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
  const handleCountriesSearch = (e: ChangeEvent<HTMLInputElement>) => {
    // TODO: Use Debounce...
    const countryName = e.target.value;
    console.log(countryName);
  };

  if (!countries) return <h3>Loading ....</h3>;
  return (
    <>
      <section className="search-and-filter d-flex-row space-between">
        <input
          className="search-bar"
          type="text"
          name="country"
          placeholder="Search for a country..."
          onChange={(e) => handleCountriesSearch(e)}
        />
        <select name="region" placeholder="Filter by Region">
          {regions.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </section>
      <section className="countries d-flex-row">
        {countries.map((c) => (
          <CountryCard key={c.name} {...c} />
        ))}
      </section>
    </>
  );
};
