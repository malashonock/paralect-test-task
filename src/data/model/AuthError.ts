import { ApiError } from './ApiError';

export interface AuthError extends ApiError {
  error: string;
}