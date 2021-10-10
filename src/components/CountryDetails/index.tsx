import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory, useParams } from 'react-router-dom';
import { useGetCountryDetails } from '../../hooks/useGetCountryByName';
import { formatNumber } from '../../utils/formatNumber';
import './style.scss';

export const CountryDetails = () => {
  const { countryName } = useParams<{ countryName: string }>();
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = useGetCountryDetails(countryName);
  console.log(countryName);

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <div className="margin-b-2em">
        <button onClick={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
      </div>
      <div className="country-details d-flex-row">
        <div className="country-details__flag margin-b-2em">
          <img src={flag} alt={`${name} flag`} />
        </div>
        <div className="country-details__content">
          <h3 className="country-details__content__title">{name}</h3>
          <section className="d-flex-row">
            <ul className="list-style-none country-details__content__info">
              <li>
                <span className="bold">Native Name:</span> {nativeName}
              </li>
              <li>
                <span className="bold">Population:</span>
                {formatNumber(population)}
              </li>
              <li>
                <span className="bold">Region:</span> {region}
              </li>
              <li>
                <span className="bold">Sub Region:</span> {subregion}
              </li>
              <li>
                <span className="bold">Capital:</span> {capital}
              </li>
            </ul>
            {/* </section>
          <section> */}
            <ul className="list-style-none country-details__content__info">
              <li>
                <span className="bold">Top Level Domain:</span> {topLevelDomain}
              </li>
              <li>
                <span className="bold">Currencies:</span>{' '}
                {currencies.map((currency) => currency.name).join(', ')}
              </li>
              <li>
                <span className="bold">Languages:</span>{' '}
                {languages.map((lang) => lang.name).join(', ')}
              </li>
            </ul>
          </section>
          <section>
            <span className="bold">Border Countries:</span>
            {borders.map((b) => (
              <button>{b}</button>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};
