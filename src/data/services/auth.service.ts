import { TokenSet } from 'data/dto';
import { buildURL, publicFetcher } from 'utils';

const getTokenSet = async (): Promise<TokenSet> => {
  const url = buildURL('/oauth2/password/', {
    login: process.env.NEXT_PUBLIC_LOGIN,
    password: process.env.NEXT_PUBLIC_PASSWORD,
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    hr: 0,
  });

  return await publicFetcher<TokenSet>(url);
};

const refreshTokenSet = async (refreshToken: string): Promise<TokenSet> => {
  const url = buildURL('/oauth2/refresh_token/', {
    refresh_token: refreshToken,
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  });

  return await publicFetcher<TokenSet>(url);
};

export const AuthService = {
  getTokenSet,
  refreshTokenSet,
};