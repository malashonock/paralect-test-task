import { ApiResponse, ApiResponseError, AuthError } from 'data/dto';
import { store } from 'store';
import { logIn, refreshTokenSet } from 'store/slices';

export const publicFetcher = async <T>(url, overriddenOptions?: RequestInit): Promise<T> => {
  const rawResponse = await fetch(url, {
    method: 'GET',
    ...overriddenOptions,
    headers: {
      'x-secret-key': process.env.NEXT_PUBLIC_PROXY_KEY || '',
      ...overriddenOptions?.headers,
    },
  });

  const parsedResponse = await rawResponse.json() as ApiResponse<T>;

  if (Object.prototype.hasOwnProperty.call(parsedResponse, 'error')) {
    throw (parsedResponse as ApiResponseError).error;
  }

  return parsedResponse as T;
};

export const privateFetcher = async <T>(url): Promise<T> => {
  const { accessToken, refreshToken, tokenExpiryDate } = store.getState().auth;

  if (!accessToken || !refreshToken || !tokenExpiryDate) {
    store.dispatch(logIn());
    return await privateFetcher(url); // Retry
  }

  if (new Date(tokenExpiryDate * 1000) < new Date()) {
    await store.dispatch(refreshTokenSet());
    return await privateFetcher(url); // Retry
  }
  
  const headers: HeadersInit = {
    'x-api-app-id': process.env.NEXT_PUBLIC_CLIENT_SECRET || '',
    'Authorization': `Bearer ${accessToken}`,
  };

  try {
    return await publicFetcher<T>(url, { headers });
  } catch (error) {
    if (error.error) {
      const { code: errorCode, error: errorType } = error as AuthError;

      if (
        errorCode === 401 && errorType === 'invalid_token'
        || errorCode === 404 && errorType === 'token_not_found'
      ) {
        store.dispatch(logIn());
        return await privateFetcher(url); // Retry
      }

      if (errorCode === 410 && errorType === 'invalid_token') {
        store.dispatch(refreshTokenSet());
        return await privateFetcher(url); // Retry
      }
    }

    throw error;
  }
};