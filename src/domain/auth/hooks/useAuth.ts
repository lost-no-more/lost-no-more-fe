import { useRouter } from 'next/navigation';
import type { Provider } from '@/shared/types/api-endpoint';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { authApi } from '../apis/auth';

export function useAuth() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const getAuthState = () => {
    if (typeof window === 'undefined') {
      return {
        isLoggedIn: false,
        accessToken: null,
      };
    }

    const token = localStorage.getItem('accessToken');
    return {
      isLoggedIn: !!token,
      accessToken: token,
    };
  };

  const { data: auth = getAuthState() } = useQuery({
    queryKey: ['auth'],
    queryFn: getAuthState,
    staleTime: Infinity,
  });

  const getOAuthUrl = async (provider: Provider, token?: string) => {
    return authApi.getOAuthUrl(provider, token);
  };

  const tokenMutation = useMutation({
    mutationFn: ({
      provider,
      code,
      token,
    }: {
      provider: Provider;
      code: string;
      token?: string;
    }) => {
      return authApi.getToken(provider, code, token);
    },
    onSuccess: (response) => {
      if (response.isSuccess && response.data) {
        localStorage.setItem('accessToken', response.data);
        queryClient.setQueryData(['auth'], {
          isLoggedIn: true,
          accessToken: response.data,
        });
      }
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => {
      const token = localStorage.getItem('accessToken');
      if (!token) return Promise.resolve({ isSuccess: true, data: null, error: null });
      return authApi.logout(token);
    },
    onSuccess: () => {
      localStorage.removeItem('accessToken');
      queryClient.setQueryData(['auth'], {
        isLoggedIn: false,
        accessToken: null,
      });
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error('Logout error:', error);
      localStorage.removeItem('accessToken');
      queryClient.setQueryData(['auth'], {
        isLoggedIn: false,
        accessToken: null,
      });
    },
  });

  const logout = (callback?: () => void) => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        if (callback) {
          callback();
        } else {
          router.push('/');
        }
      }
    });
  };

  return {
    ...auth,
    getOAuthUrl,
    getToken: tokenMutation.mutate,
    isLoading: tokenMutation.isPending,
    error: tokenMutation.error,
    logout,
  };
}
