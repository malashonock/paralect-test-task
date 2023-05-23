import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { JobFiltersState, JobQueryState, SearchState } from '../types';
import { getFromLocalStorage } from 'utils';

const initialState: SearchState = {
  industryId: getFromLocalStorage<string | undefined>('industryId', undefined),
  salaryFrom: getFromLocalStorage<string | undefined>('salaryFrom', undefined),
  salaryTo: getFromLocalStorage<string | undefined>('salaryTo', undefined),
  jobQuery: getFromLocalStorage<string | undefined>('jobQuery', undefined),
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setJobFilters: (state: SearchState, action: PayloadAction<JobFiltersState>): SearchState => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearJobFilters: (state: SearchState): void => {
      delete state.industryId;
      delete state.salaryFrom;
      delete state.salaryTo;
    },
    setJobQuery: (state: SearchState, action: PayloadAction<JobQueryState>): SearchState => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearJobQuery: (state: SearchState): void => {
      delete state.jobQuery;
    },
  },
});

export const selectSearchCriteria = (state: RootState): SearchState =>
  state.search;

export const selectJobFilters = (state: RootState): JobFiltersState => {
  const { search: { industryId, salaryFrom, salaryTo } } = state;
  return {
    industryId,
    salaryFrom,
    salaryTo,
  };
};

export const selectJobQuery = (state: RootState): JobQueryState => {
  const { search: { jobQuery } } = state;
  return {
    jobQuery,
  };
};

export default searchSlice;