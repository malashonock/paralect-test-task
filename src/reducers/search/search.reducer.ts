import { initialJobFiltersState } from './init';
import { SearchActionType, SearchAction, SearchState, JobFiltersState } from './types';

export const searchReducer = (state: SearchState, action: SearchAction): SearchState => {
  switch (action.type) {
    case SearchActionType.SetJobFilters:
      return {
        ...state,
        ...action.payload,
        salaryRange: {
          ...state.salaryRange,
          ...action.payload.salaryRange,
        },
      };

    case SearchActionType.ClearJobFilters:
      return {
        ...state,
        ...initialJobFiltersState,
      };

    case SearchActionType.SetJobQuery:
      return {
        ...state,
        ...action.payload,
      };
  
    default:
      return state;
  }
};