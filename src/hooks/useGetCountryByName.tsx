export const useGetCountryDetails = (country: string) => {
  return {
    name: 'Egypt',
    topLevelDomain: ['.eg'],
    alpha2Code: 'EG',
    alpha3Code: 'EGY',
    callingCodes: ['20'],
    capital: 'Cairo',
    altSpellings: ['EG', 'Arab Republic of Egypt'],
    region: 'Africa',
    subregion: 'Northern Africa',
    population: 91290000,
    latlng: [27, 30],
    demonym: 'Egyptian',
    area: 1002450,
    gini: 30.8,
    timezones: ['UTC+02:00'],
    borders: ['ISR', 'LBY', 'SDN'],
    nativeName: 'مصر‎',
    numericCode: '818',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/255px-Flag_of_Egypt.svg.png',
    currencies: [
      {
        code: 'EGP',
        name: 'Egyptian pound',
        symbol: '£',
      },
    ],
    languages: [
      {
        iso639_1: 'ar',
        iso639_2: 'ar',
        name: 'Arabic',
        nativeName: 'Arabic',
      },
      {
        iso639_1: 'ar',
        iso639_2: 'ar',
        name: 'Arabic',
        nativeName: 'Arabic',
      },
    ],
  };
};
