export type Theme = 'dark' | 'light';

export type Region = 'asia' | 'africa' | 'americas' | 'oceania' | 'europe';

export type Country = {
  name?: string;
  topLevelDomain?: string[];
  alpha2Code?: string;
  alpha3Code?: string;
  callingCodes?: string[];
  capital?: string;
  altSpellings?: string[];
  region?: string;
  subregion?: string;
  population?: number;
  latlng?: [number, number];
  demonym?: string;
  area?: number;
  gini?: number;
  timezones?: string[];
  borders?: string[];
  nativeName?: string;
  numericCode?: string;
  currencies?: Currency[];
  languages?: Language[];
  translations?: Record<string, string>;
  flag?: string;
  regionalBlocs?: RegionalBlock[];
  cioc?: string;
};

type Language = {
  iso639_1?: string;
  iso639_2?: string;
  name?: string;
  nativeName?: string;
};

type Currency = {
  code?: string;
  name?: string;
  symbol?: string;
};

type RegionalBlock = {
  acronym?: string;
  name?: string;
};
