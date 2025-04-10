export interface SimpleCountry {
  id: string,
  name: string,
  capital: string | null,
  population: number,
  region: Region,
  flag: string,
}

export interface Region {
  id: string,
  name: string,
} 