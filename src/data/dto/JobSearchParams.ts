import { PublishedStatus } from '.';

export interface JobSearchParams {
  ids?: number[],
  catalogues?: string; // Industry ID
  payment_from?: string;
  payment_to?: string;
  keyword?: string;
  published?: PublishedStatus;
  page?: number;
  count?: number;
}