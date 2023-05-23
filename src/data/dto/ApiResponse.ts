import { ApiResponseError } from '.';

export type ApiResponse<T> = T | ApiResponseError;