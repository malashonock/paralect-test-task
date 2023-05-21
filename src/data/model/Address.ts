import { PhoneNumber } from './PhoneNumber';

export interface Address {
  addressString: string;
  latitude: number;
  longitude: number;
  phones: PhoneNumber[];
}