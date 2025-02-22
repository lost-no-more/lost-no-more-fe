'use client';

import type { ReactNode} from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  accessToken: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setAccessToken(token);
    }
    setIsInitialized(true);
  }, []);

  const login = (token: string) => {
    setAccessToken(token);
    localStorage.setItem('accessToken', token);
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem('accessToken');
  };

  if (!isInitialized) {
    return null;
  }

  return (
    <AuthContext.Provider data-cid="element-jq9Z5v"
      value={{
        isLoggedIn: !!accessToken,
        accessToken,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
