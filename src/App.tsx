import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { CountriesList } from './components/CountriesList.tsx';
import { CountryDetails } from './components/CountryDetails';
import { AppContextProvider } from './contexts/AppContext';
import { CountriesContextProvider } from './contexts/CountriesContext';

function App() {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
  if (!baseURL || !accessToken)
    return <h2>Missing BASE_URL or ACCESS_TOKEN</h2>;
  return (
    <AppContextProvider baseURL={baseURL} access_token={accessToken}>
      <Header />
      <main className="container">
        <BrowserRouter>
          <Route path="/" exact>
            <Redirect to="/countries" />
          </Route>
          <Route path="/countries" exact>
            <CountriesContextProvider>
              <CountriesList />
            </CountriesContextProvider>
          </Route>
          <Route path="/countries/:countryName">
            <CountryDetails />
          </Route>
        </BrowserRouter>
      </main>
    </AppContextProvider>
  );
}

export default App;
