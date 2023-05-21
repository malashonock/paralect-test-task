export interface City {
  id: number;
  title: string; // City name
  declension: string; // In ${cityName}
  genitive: string; // City name in Genitive
  hasMetro: boolean;
}