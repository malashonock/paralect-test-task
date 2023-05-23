export const buildURL = (endpoint: string, searchParams?: Record<string, any>): string => {
  const queryString = searchParams ? buildQueryString(searchParams) : '';
  return process.env.NEXT_PUBLIC_API_BASEURL + endpoint + queryString;
};

export const buildQueryString = (searchParams: Record<string, any>): string => {
  const stringifiedParams: Record<string, string> = Object.fromEntries(
    Object.entries(searchParams).map(([key, value]: [string, any]): [string, string] | undefined => {
      if (!value) {
        return undefined;
      }

      const stringifiedValue: string = typeof value === 'string' ? value : value.toString();

      return [
        key,
        stringifiedValue,
      ]
    }).filter((entry: [string, string] | undefined): boolean => Array.isArray(entry)),
  );

  const queryString: string = new URLSearchParams(stringifiedParams).toString();
  return queryString ? '?' + encodeURI(queryString) : '';
};