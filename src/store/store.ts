import { configureStore } from '@reduxjs/toolkit';

import { favoritesSlice } from './slices';
import { localStorageMiddleware } from './middleware';

export const store = configureStore({
  reducer: {
    [favoritesSlice.name]: favoritesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;