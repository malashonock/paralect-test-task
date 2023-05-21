import { ApiError, ListResponse } from '.';

export type ApiResponse<T> =
  | T
  | ListResponse<T>
  | { error: ApiError; };