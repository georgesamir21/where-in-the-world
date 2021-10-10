import { faMoon as darkMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as lightMoon } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';
import { useEffect, useRef, useState } from 'react';
import { changeTheme } from '../../utils/branding';

export const Header = () => {
  // initial theme is light
  const [darkMode, setDarkMode] = useState<boolean>(
    !!JSON.parse(localStorage.getItem('darkMode')!)
  );
  useEffect(() => {
    changeTheme(darkMode ? 'dark' : 'light');
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="header d-flex-row">
      <h1 className="app-title">Where in the world?</h1>
      <span>
        <a onClick={toggleDarkMode} className="dark-mode-toggle">
          <FontAwesomeIcon
            className="margin-r-0-5em"
            icon={darkMode ? darkMoon : lightMoon}
          />
          Dark Mode
        </a>
      </span>
    </header>
  );
};
