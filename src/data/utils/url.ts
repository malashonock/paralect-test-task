export const buildURL = (endpoint: string): string => {
  return process.env.NEXT_PUBLIC_API_BASEURL + endpoint;
};