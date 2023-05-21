import { SearchActionType, JobFiltersState, JobQueryState } from '.';

export type SearchAction = 
  | SetJobFiltersAction
  | ClearJobFiltersAction
  | SetJobQueryAction;

export interface SetJobFiltersAction {
  type: SearchActionType.SetJobFilters;
  payload: JobFiltersState;
}

export interface ClearJobFiltersAction {
  type: SearchActionType.ClearJobFilters;
}

export interface SetJobQueryAction {
  type: SearchActionType.SetJobQuery;
  payload: JobQueryState;
}