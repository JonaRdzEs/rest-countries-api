export interface SimpleCountry {
  id: string;
  name: string;
  capital: string | null;
  population: number;
  region: Region;
  flag: string;
}

export interface Region {
  id: string;
  name: string;
}

export interface Country {
  flag: string;
  currencies: Currency[];
  languages: Language[];
  id: string;
  name: string;
  topLevelDomain: string[];
  capital: string | null;
  subregion: string;
  population: number;
  borders: string[];
  nativeName: string;
}

export interface BorderCountry {
  id: string,
  name: string,
}

interface Currency {
  id: string,
  symbol: string,
  name: string,
}

interface Language {
  name: string,
}
