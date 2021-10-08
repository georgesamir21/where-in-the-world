import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { CountriesList } from './components/CountriesList.tsx';
import { CountryDetails } from './components/CountryDetails';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <BrowserRouter>
          <Route path="/" exact>
            <CountriesList />
          </Route>
          <Route path="/:countryName">
            <CountryDetails />
          </Route>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
