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

  // TODO: get from redux store
  const accessToken: string = 'v3.r.137440105.3e8af7c9063f62c6e22e7948803c0633ccbb4e1e.7f1e761ccc7bb7c1b5833793cac1ee11b2a1a974';

  const { data, isLoading, error } = useSWR<Job>(url, privateFetcher(accessToken));

  return {
    job: data,
    isLoading,
    isError: Boolean(error),
  };
};