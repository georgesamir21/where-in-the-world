import './style.scss';

export const Header = () => {
  return (
    <header className="header">
      <h1 className="app-title">Where in the world?</h1>
      <span>
        <span className="dark-mode-toggle">
          {/* <i className="fa-light fa-moon"></i> */}
          <i className="fa-solid fa-moon"></i>
          Dark Mode
        </span>
      </span>
    </header>
  );
};
