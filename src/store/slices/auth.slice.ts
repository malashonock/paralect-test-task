import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { AuthState } from '../types';
import { UnixTimestamp, getFromLocalStorage } from 'utils';
import { AuthService } from 'data/services';
import { TokenSet } from 'data/dto';

const initialState: AuthState = {
  accessToken: getFromLocalStorage<string | undefined>('accessToken', undefined),
  refreshToken: getFromLocalStorage<string | undefined>('refreshToken', undefined),
  tokenExpiryDate: getFromLocalStorage<UnixTimestamp | undefined>('tokenExpiryDate', undefined),
  isLoading: false,
  isError: false,
};

export const logIn = createAsyncThunk<TokenSet>(
  'auth/logIn',
  async () => {
    const tokenSet = await AuthService.getTokenSet();
    return tokenSet;
  },
);

export const refreshTokenSet = createAsyncThunk<TokenSet>(
  'auth/refreshToken',
  async (_, { getState, dispatch }) => {
    const { refreshToken } = getState() as AuthState;

    if (!refreshToken) {
      return await dispatch(logIn()).unwrap();
    }

    const newTokenSet = await AuthService.refreshTokenSet(refreshToken);
    return newTokenSet;
  },
);

const parseTokenSet = ({ access_token, refresh_token, ttl }: TokenSet): AuthState => ({
  accessToken: access_token,
  refreshToken: refresh_token,
  tokenExpiryDate: ttl,
  isLoading: false,
  isError: false,
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(logIn.pending, (state: AuthState, action) => {
        state.isLoading = true;
      })
      .addCase(refreshTokenSet.pending, (state: AuthState, action) => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state: AuthState, action) => {
        return parseTokenSet(action.payload);
      })
      .addCase(refreshTokenSet.fulfilled, (state: AuthState, action) => {
        return parseTokenSet(action.payload);
      })
      .addCase(logIn.rejected, (state: AuthState, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
      })
      .addCase(refreshTokenSet.rejected, (state: AuthState, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error;
      });
  },
});

export const selectTokenSet = (state: RootState): AuthState | undefined =>
  state.auth;

export default authSlice;