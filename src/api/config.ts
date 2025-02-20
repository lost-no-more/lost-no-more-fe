export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_PATHS = {
  OAUTH_URL: (provider: 'kakao' | 'google') => `${BASE_URL}/auth/oauth/${provider}/code`,
  OAUTH_TOKEN: (provider: 'kakao' | 'google', code: string) => `${BASE_URL}/auth/oauth/${provider}/login?code=${code}`,
} as const;
