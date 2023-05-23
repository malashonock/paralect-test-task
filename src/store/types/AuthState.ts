import { UnixTimestamp } from 'utils';

export interface AuthState {
  accessToken?: string;
  refreshToken?: string;
  tokenExpiryDate?: UnixTimestamp;
  isLoading: boolean;
  isError: boolean;
  error?: unknown;
}