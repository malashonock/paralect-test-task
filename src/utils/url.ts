export const buildURL = (endpoint: string, searchParams?: Record<string, any>): string => {
  const queryString = searchParams ? buildQueryString(searchParams) : '';
  return process.env.NEXT_PUBLIC_API_BASEURL + endpoint + queryString;
};

const stringify = (value: any): string => {
  return typeof value === 'string' ? value : value.toString();
};

export const buildQueryString = (searchParams: Record<string, any>): string => {
  const stringifiedParams: Record<string, string> = Object.fromEntries(
    Object.entries(searchParams).reduce((prev: Array<[string, string]>, [key, value]: [string, any]): Array<[string, string]> => {
      if (!value) {
        return prev;
      }

      if (Array.isArray(value)) {
        return [
          ...prev, 
          ...value.map((value, index: number): [string, string] => [
            key + `[${index}]`,
            stringify(value),
          ]),
        ];
      }

      return [
        ...prev, 
        [
          key,
          stringify(value),
        ]
      ];
    }, []),
  );

  const queryString: string = new URLSearchParams(stringifiedParams).toString();
  return queryString ? '?' + queryString : '';
};