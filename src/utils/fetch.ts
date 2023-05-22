import { ApiResponse, ApiResponseError } from 'data/model';

export const publicFetcher = async <T>(url): Promise<T> => {
  const rawResponse = await fetch(url, {
    method: 'GET',
    headers: {
      'x-secret-key': process.env.NEXT_PUBLIC_PROXY_KEY || '',
    },
  });

  const parsedResponse = await rawResponse.json() as ApiResponse<T>;

  if (Object.prototype.hasOwnProperty.call(parsedResponse, 'error')) {
    throw (parsedResponse as ApiResponseError).error;
  }

  return parsedResponse as T;
};

export const privateFetcher = (accessToken: string) => async <T>(url): Promise<T> => {
  const rawResponse = await fetch(url, {
    method: 'GET',
    headers: {
      'x-secret-key': process.env.NEXT_PUBLIC_PROXY_KEY || '',
      'x-api-app-id': process.env.NEXT_PUBLIC_CLIENT_SECRET || '',
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  const parsedResponse = await rawResponse.json() as ApiResponse<T>;

  if (Object.prototype.hasOwnProperty.call(parsedResponse, 'error')) {
    throw (parsedResponse as ApiResponseError).error;
  }

  return parsedResponse as T;
};