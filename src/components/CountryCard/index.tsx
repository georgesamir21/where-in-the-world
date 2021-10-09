import './style.scss';
// import flagPlacehlder from '../../../public/images/flag-placeholder.jpg';

type Props = {
  flag?: string;
  name?: string;
  region?: string;
  capital?: string;
  population?: number;
};

export const CountryCard = ({
  flag = process.env.PUBLIC_URL + '/images/flag-placeholder.jpg',
  name,
  region,
  capital,
  population,
}: Props) => {
  return (
    <>
      <div className="card">
        <div className="card__image">
          <img src={flag} alt={`${name} flag`} />
        </div>
        <div className="card__content">
          <h3 className="title">{name}</h3>
          <ul className="details list-style-none">
            <li>
              <span className="bold">Population: </span>
              {population}
            </li>
            <li>
              <span className="bold">Region: </span>
              {region}
            </li>
            <li>
              <span className="bold">Capital: </span>
              {capital}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
