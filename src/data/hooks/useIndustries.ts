import useSWR from 'swr';

import { Industry } from '../model';
import { buildURL, publicFetcher } from 'utils';

export interface UseIndustriesResult {
  industries: Industry[];
  isLoading: boolean;
  isError: boolean;
}

export const useIndustries = (): UseIndustriesResult => {
  const url = buildURL('/catalogues/');
  
  const { data, isLoading, error } = useSWR<Industry[]>(url, publicFetcher);

  return {
    industries: data,
    isLoading,
    isError: Boolean(error),
  };
};