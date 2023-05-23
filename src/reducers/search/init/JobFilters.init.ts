import { JobFiltersState } from '../types';

export const initialJobFiltersState: JobFiltersState = {
  industryId: undefined,
  salaryRange: {
    from: undefined,
    to: undefined,
  },
};