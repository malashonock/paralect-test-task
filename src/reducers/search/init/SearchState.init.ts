import { SearchState } from '../types';
import { initialJobFiltersState, initialJobQueryState } from '.';

export const initialSearchState: SearchState = {
  ...initialJobFiltersState,
  ...initialJobQueryState,
};