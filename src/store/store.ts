import { configureStore } from '@reduxjs/toolkit';

import { favoritesSlice } from './slices';
import { localStorageMiddleware } from './middleware';
import authSlice from './slices/auth.slice';

export const store = configureStore({
  reducer: {
    [favoritesSlice.name]: favoritesSlice.reducer,
    [authSlice.name]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;