import { useState } from 'react';
import { CountryCard } from '../CountryCard';

export const CountriesList = () => {
  const [countries, setCountries] = useState<any>(null);

  // make API call to get the countries
  setCountries([
    {
      name: 'Germany',
      topLevelDomain: ['.de'],
      alpha2Code: 'DE',
      alpha3Code: 'DEU',
      callingCodes: ['49'],
      capital: 'Berlin',
      altSpellings: [
        'DE',
        'Federal Republic of Germany',
        'Bundesrepublik Deutschland',
      ],
      region: 'Europe',
      subregion: 'Western Europe',
      population: 81770900,
      latlng: [51, 9],
      demonym: 'German',
      area: 357114,
      gini: 28.3,
      timezones: ['UTC+01:00'],
      borders: ['AUT', 'BEL', 'CZE', 'DNK', 'FRA', 'LUX', 'NLD', 'POL', 'CHE'],
      nativeName: 'Deutschland',
      numericCode: '276',
      currencies: [
        {
          code: 'EUR',
          name: 'Euro',
          symbol: '€',
        },
      ],
      languages: [
        {
          iso639_1: 'de',
          iso639_2: 'deu',
          name: 'German',
          nativeName: 'Deutsch',
        },
      ],
      translations: {
        br: 'Alemanha',
        de: 'Deutschland',
        es: 'Alemania',
        fa: 'آلمان',
        fr: 'Allemagne',
        hr: 'Njemačka',
        it: 'Germania',
        ja: 'ドイツ',
        nl: 'Duitsland',
        pt: 'Alemanha',
      },
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png',
      regionalBlocs: [
        {
          acronym: 'EU',
          name: 'European Union',
        },
      ],
      cioc: 'GER',
    },
    {
      name: 'Germany',
      topLevelDomain: ['.de'],
      alpha2Code: 'DE',
      alpha3Code: 'DEU',
      callingCodes: ['49'],
      capital: 'Berlin',
      altSpellings: [
        'DE',
        'Federal Republic of Germany',
        'Bundesrepublik Deutschland',
      ],
      region: 'Europe',
      subregion: 'Western Europe',
      population: 81770900,
      latlng: [51, 9],
      demonym: 'German',
      area: 357114,
      gini: 28.3,
      timezones: ['UTC+01:00'],
      borders: ['AUT', 'BEL', 'CZE', 'DNK', 'FRA', 'LUX', 'NLD', 'POL', 'CHE'],
      nativeName: 'Deutschland',
      numericCode: '276',
      currencies: [
        {
          code: 'EUR',
          name: 'Euro',
          symbol: '€',
        },
      ],
      languages: [
        {
          iso639_1: 'de',
          iso639_2: 'deu',
          name: 'German',
          nativeName: 'Deutsch',
        },
      ],
      translations: {
        br: 'Alemanha',
        de: 'Deutschland',
        es: 'Alemania',
        fa: 'آلمان',
        fr: 'Allemagne',
        hr: 'Njemačka',
        it: 'Germania',
        ja: 'ドイツ',
        nl: 'Duitsland',
        pt: 'Alemanha',
      },
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png',
      regionalBlocs: [
        {
          acronym: 'EU',
          name: 'European Union',
        },
      ],
      cioc: 'GER',
    },
    {
      name: 'Germany',
      topLevelDomain: ['.de'],
      alpha2Code: 'DE',
      alpha3Code: 'DEU',
      callingCodes: ['49'],
      capital: 'Berlin',
      altSpellings: [
        'DE',
        'Federal Republic of Germany',
        'Bundesrepublik Deutschland',
      ],
      region: 'Europe',
      subregion: 'Western Europe',
      population: 81770900,
      latlng: [51, 9],
      demonym: 'German',
      area: 357114,
      gini: 28.3,
      timezones: ['UTC+01:00'],
      borders: ['AUT', 'BEL', 'CZE', 'DNK', 'FRA', 'LUX', 'NLD', 'POL', 'CHE'],
      nativeName: 'Deutschland',
      numericCode: '276',
      currencies: [
        {
          code: 'EUR',
          name: 'Euro',
          symbol: '€',
        },
      ],
      languages: [
        {
          iso639_1: 'de',
          iso639_2: 'deu',
          name: 'German',
          nativeName: 'Deutsch',
        },
      ],
      translations: {
        br: 'Alemanha',
        de: 'Deutschland',
        es: 'Alemania',
        fa: 'آلمان',
        fr: 'Allemagne',
        hr: 'Njemačka',
        it: 'Germania',
        ja: 'ドイツ',
        nl: 'Duitsland',
        pt: 'Alemanha',
      },
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png',
      regionalBlocs: [
        {
          acronym: 'EU',
          name: 'European Union',
        },
      ],
      cioc: 'GER',
    },
    {
      name: 'Germany',
      topLevelDomain: ['.de'],
      alpha2Code: 'DE',
      alpha3Code: 'DEU',
      callingCodes: ['49'],
      capital: 'Berlin',
      altSpellings: [
        'DE',
        'Federal Republic of Germany',
        'Bundesrepublik Deutschland',
      ],
      region: 'Europe',
      subregion: 'Western Europe',
      population: 81770900,
      latlng: [51, 9],
      demonym: 'German',
      area: 357114,
      gini: 28.3,
      timezones: ['UTC+01:00'],
      borders: ['AUT', 'BEL', 'CZE', 'DNK', 'FRA', 'LUX', 'NLD', 'POL', 'CHE'],
      nativeName: 'Deutschland',
      numericCode: '276',
      currencies: [
        {
          code: 'EUR',
          name: 'Euro',
          symbol: '€',
        },
      ],
      languages: [
        {
          iso639_1: 'de',
          iso639_2: 'deu',
          name: 'German',
          nativeName: 'Deutsch',
        },
      ],
      translations: {
        br: 'Alemanha',
        de: 'Deutschland',
        es: 'Alemania',
        fa: 'آلمان',
        fr: 'Allemagne',
        hr: 'Njemačka',
        it: 'Germania',
        ja: 'ドイツ',
        nl: 'Duitsland',
        pt: 'Alemanha',
      },
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png',
      regionalBlocs: [
        {
          acronym: 'EU',
          name: 'European Union',
        },
      ],
      cioc: 'GER',
    },
    {
      name: 'Germany',
      topLevelDomain: ['.de'],
      alpha2Code: 'DE',
      alpha3Code: 'DEU',
      callingCodes: ['49'],
      capital: 'Berlin',
      altSpellings: [
        'DE',
        'Federal Republic of Germany',
        'Bundesrepublik Deutschland',
      ],
      region: 'Europe',
      subregion: 'Western Europe',
      population: 81770900,
      latlng: [51, 9],
      demonym: 'German',
      area: 357114,
      gini: 28.3,
      timezones: ['UTC+01:00'],
      borders: ['AUT', 'BEL', 'CZE', 'DNK', 'FRA', 'LUX', 'NLD', 'POL', 'CHE'],
      nativeName: 'Deutschland',
      numericCode: '276',
      currencies: [
        {
          code: 'EUR',
          name: 'Euro',
          symbol: '€',
        },
      ],
      languages: [
        {
          iso639_1: 'de',
          iso639_2: 'deu',
          name: 'German',
          nativeName: 'Deutsch',
        },
      ],
      translations: {
        br: 'Alemanha',
        de: 'Deutschland',
        es: 'Alemania',
        fa: 'آلمان',
        fr: 'Allemagne',
        hr: 'Njemačka',
        it: 'Germania',
        ja: 'ドイツ',
        nl: 'Duitsland',
        pt: 'Alemanha',
      },
      flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png',
      regionalBlocs: [
        {
          acronym: 'EU',
          name: 'European Union',
        },
      ],
      cioc: 'GER',
    },
  ]);

  return (
    <>
      <div className="countries-cards">
        {countries.map((c: any) => (
          <CountryCard key={c.name} {...c} />
        ))}
      </div>
    </>
  );
};
