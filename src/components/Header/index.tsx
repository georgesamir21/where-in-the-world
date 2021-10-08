import './style.scss';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="app-title">Where in the world?</h1>
      <span>
        <a className="dark-mode-toggle">Dark Mode</a>
      </span>
    </header>
  );
};
