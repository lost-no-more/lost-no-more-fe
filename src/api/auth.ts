import { API_PATHS } from './config';

interface OAuthResponse {
  isSuccess: boolean;
  data: string;
  error: null | {
    code: number;
    message: string;
  };
}

interface TokenResponse {
  isSuccess: boolean;
  data: string;
  error: null | {
    code: number;
    message: string;
  };
}

export const authApi = {
  getOAuthUrl: async (provider: 'kakao' | 'google', token?: string) => {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(API_PATHS.OAUTH_URL(provider), {
      headers,
    });
    return response.json() as Promise<OAuthResponse>;
  },

  getToken: async (provider: 'kakao' | 'google', code: string, token?: string) => {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(API_PATHS.OAUTH_TOKEN(provider, code), {
      method: 'POST',
      headers,
      body: JSON.stringify({ code }),
    });
    return response.json() as Promise<TokenResponse>;
  },
};
