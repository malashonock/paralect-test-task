import { UnixTimestamp } from 'utils';

export interface TokenSet {
  access_token: string;
  refresh_token: string;
  ttl: UnixTimestamp; // Expiration date & time
  expires_in: number; // Time to expiry in seconds
  token_type: string; // Bearer
}