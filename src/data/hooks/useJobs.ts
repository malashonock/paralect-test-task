import useSWR from 'swr';

import { Job } from '../model';
import { JobSearchParams, ListResponse } from '../dto';
import { buildURL, privateFetcher } from 'utils';

export interface UseJobsResult {
  jobsList: ListResponse<Job>;
  isLoading: boolean;
  isError: boolean;
}

export const useJobs = (searchParams?: JobSearchParams): UseJobsResult => {
  const url = buildURL('/vacancies/', searchParams);

  const { data, isLoading, error } = useSWR<ListResponse<Job>>(url, privateFetcher);

  return {
    jobsList: data,
    isLoading,
    isError: Boolean(error),
  };
};