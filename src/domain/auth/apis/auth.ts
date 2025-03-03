import { BASE_URL } from '@/shared/config/api-config';
import type { Provider } from '@/shared/types/api-endpoint';
import { ApiEndpoint } from '@/shared/types/api-endpoint';
import type { Response } from '@/shared/types/response';
import ky from 'ky';

type OAuthUrlData = string;
type TokenData = string;

const api = ky.create({
  prefixUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getHeaders = (token?: string): Record<string, string> => {
  const headers: Record<string, string> = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
};

async function attemptTokenReissue(): Promise<string | null> {
  try {
    const result = await authApi.reissueToken();
    if (result.isSuccess && result.data) {
      return result.data;
    }
    return null;
  } catch (reissueError) {
    console.error('토큰 재발급 실패:', reissueError);
    return null;
  }
}

async function authenticatedRequest<T>(
  requestFn: (token: string) => Promise<Response<T>>,
  token: string
): Promise<Response<T>> {
  try {
    return await requestFn(token);
  } catch (error: any) {
    if (error?.response?.data?.message !== '만료된 AccessToken입니다.') {
      throw error;
    }

    const newToken = await attemptTokenReissue();
    if (!newToken) {
      throw error;
    }

    return await requestFn(newToken);
  }
}

export const authApi = {
  getOAuthUrl: async (provider: Provider, token?: string, state?: string) => {
    const headers = getHeaders(token);
    let url = ApiEndpoint.OAUTH_URL(provider);

    if (state) {
      url = `${url}?state=${state}`;
    }

    return api.get(url, { headers }).json<Response<OAuthUrlData>>();
  },

  getToken: async (
    provider: Provider,
    code: string,
    options?: { token?: string; state?: string }
  ) => {
    if (options?.state === 'withdrawal' || localStorage.getItem('withdraw_in_progress') === 'true') {
      return {
        isSuccess: false,
        data: null,
        error: {
          code: 409,
          message: '회원탈퇴 진행 중입니다.',
        },
      };
    }

    const headers = getHeaders(options?.token);

    return api
      .post(ApiEndpoint.OAUTH_TOKEN(provider, code), {
        headers,
        credentials: 'include',
      })
      .json<Response<TokenData>>();
  },

  logout: async (token: string) => {
    return authenticatedRequest((currentToken) => {
      const headers = getHeaders(currentToken);
      return api
        .delete(ApiEndpoint.LOGOUT, {
          headers,
          credentials: 'include',
        })
        .json<Response<null>>();
    }, token);
  },

  reissueToken: async () => {
    try {
      return await api
        .post(ApiEndpoint.REISSUE, {
          credentials: 'include',
        })
        .json<Response<TokenData>>();
    } catch (error) {
      console.error(':', error);
      throw error;
    }
  },

  withdraw: async (provider: Provider, token: string, code?: string) => {
    const endpoint =
      code && provider === 'google'
        ? `${ApiEndpoint.WITHDRAW(provider)}?code=${code}`
        : ApiEndpoint.WITHDRAW(provider);

    return authenticatedRequest((currentToken) => {
      const headers = getHeaders(currentToken);
      return api
        .delete(endpoint, {
          headers,
          credentials: 'include',
        })
        .json<Response<null>>();
    }, token);
  },
};
