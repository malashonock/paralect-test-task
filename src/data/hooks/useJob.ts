import useSWR from 'swr';

import { Job } from '../model';
import { buildURL, privateFetcher } from 'utils';

export interface UseJobResult {
  job: Job;
  isLoading: boolean;
  isError: boolean;
}

export const useJob = (id: string): UseJobResult => {
  const url = buildURL(`/vacancies/${id}`);

  const { data, isLoading, error } = useSWR<Job>(url, privateFetcher);

  return {
    job: data,
    isLoading,
    isError: Boolean(error),
  };
};