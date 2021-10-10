import { useHistory } from 'react-router-dom';
import { formatNumber } from '../../utils/formatNumber';
import './style.scss';

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
  const history = useHistory();
  const navigateToDetailsPage = () => {
    history.push(`${name}?capital=${capital}`);
  };
  return (
    <div className="card" onClick={navigateToDetailsPage}>
      {/* <Link to={name!}> */}
      <div className="card__image">
        <img src={flag} alt={`${name} flag`} />
      </div>
      <div className="card__content">
        <h3 className="title">{name}</h3>
        <ul className="details list-style-none">
          <li>
            <span className="bold">Population: </span>
            {population ? formatNumber(population) : 'N/A'}
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
      {/* </Link> */}
    </div>
  );
};
