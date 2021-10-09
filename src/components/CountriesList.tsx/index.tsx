import { useGetCountries } from '../../hooks/useGetCountries';
import { CountryCard } from '../CountryCard';
import './style.scss';

export const CountriesList = () => {
  const countries = useGetCountries();
  if (!countries) return <h3>lOADING ....</h3>;
  console.log(countries);

  return (
    <>
      <div className="countries-cards">
        {countries.map((c) => (
          <CountryCard key={c.name} {...c} />
        ))}
      </div>
    </>
  );
};
