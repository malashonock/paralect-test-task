import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { FavoritesState } from '../types';
import { getFromLocalStorage } from 'utils';

const initialState: FavoritesState = {
  savedJobIds: getFromLocalStorage<number[] | undefined>('savedJobIds', []),
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state: FavoritesState, action: PayloadAction<number>): void => {
      state.savedJobIds.push(action.payload);
    },
    removeFromFavorites: (state: FavoritesState, action: PayloadAction<number>): FavoritesState => {
      return {
        savedJobIds: state.savedJobIds.filter((id: number): boolean => id !== action.payload),
      };
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export const selectSavedJobIds = (state: RootState): number[] | undefined =>
  state.favorites.savedJobIds;

export default favoritesSlice;