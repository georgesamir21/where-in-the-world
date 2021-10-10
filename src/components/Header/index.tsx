import { faMoon as darkMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as lightMoon } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="app-title">Where in the world?</h1>
      <span>
        <span className="dark-mode-toggle">
          <FontAwesomeIcon icon={lightMoon} />
          Dark Mode
        </span>
      </span>
    </header>
  );
};
