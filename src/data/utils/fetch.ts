export const fetcher = async <T>(...args: Parameters<typeof fetch>): Promise<T> => {
  const [url, options] = args;

  const mergedOptions: RequestInit = {
    ...options || {},
    headers: {
      ...options?.headers,
      'x-secret-key': process.env.NEXT_PUBLIC_PROXY_KEY || '',
    },
  };

  const response = await fetch(url, mergedOptions);
  return await response.json() as T;
}