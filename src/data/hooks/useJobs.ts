import useSWR from 'swr';

import { Job, JobSearchParams, ListResponse } from '../model';
import { buildURL, privateFetcher } from 'utils';

export interface UseJobsResult {
  jobsList: ListResponse<Job>;
  isLoading: boolean;
  isError: boolean;
}

export const useJobs = (searchParams?: JobSearchParams): UseJobsResult => {
  const url = buildURL('/vacancies/', searchParams);

  // TODO: get from redux store
  const accessToken: string = 'v3.r.137440105.3e8af7c9063f62c6e22e7948803c0633ccbb4e1e.7f1e761ccc7bb7c1b5833793cac1ee11b2a1a974';

  const { data, isLoading, error } = useSWR<ListResponse<Job>>(url, privateFetcher(accessToken));

  return {
    jobsList: data,
    isLoading,
    isError: Boolean(error),
  };
};