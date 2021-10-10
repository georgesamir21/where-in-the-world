import { faMoon as darkMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as lightMoon } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';
import { useState } from 'react';

export const Header = () => {
  const [darkModeEnabled, steDarkModeEnabled] = useState(false);

  const toggleDarkMode = () => {
    steDarkModeEnabled(!darkModeEnabled);
  };
  return (
    <header className="header d-flex-row">
      <h1 className="app-title">Where in the world?</h1>
      <span>
        <a onClick={toggleDarkMode} className="dark-mode-toggle">
          <FontAwesomeIcon icon={darkModeEnabled ? darkMoon : lightMoon} />
          Dark Mode
        </a>
      </span>
    </header>
  );
};
