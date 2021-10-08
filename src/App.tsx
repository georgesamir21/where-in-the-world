import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { CountriesList } from './components/CountriesList.tsx';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Route path="/" exact>
          <CountriesList />
        </Route>
        <Route path=":countryName">
          <CountryDetails />
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;
