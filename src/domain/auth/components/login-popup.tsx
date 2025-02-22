'use client';

import React, { useState } from 'react';

import { authApi } from '@/api/auth';
import { useAuth } from '@/domain/auth/contexts/auth-context';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';

import LoginProcess from './login-process';
import SocialLoginButton from './social-login-button';

interface LoginPopupProps {
  open: boolean;
  onClose: () => void;
  onLoginSuccess?: () => void;
}

export default function LoginPopup({ open, onClose, onLoginSuccess }: LoginPopupProps) {
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { login } = useAuth();

  const handleLogin = async (provider: 'kakao' | 'google') => {
    try {
      setError(null);
      const response = await authApi.getOAuthUrl(provider);

      if (response.isSuccess && response.data) {
        const popup = window.open(response.data, 'Login', 'width=500,height=600,left=400,top=200');

        window.addEventListener('message', async function handleMessage(event) {
          if (event.origin !== window.location.origin) return;

          if (event.data.type === 'OAUTH_CALLBACK') {
            window.removeEventListener('message', handleMessage);
            popup?.close();

            try {
              setIsProcessing(true);
              const token = await authApi.getToken(provider, event.data.code);

              if (token.isSuccess && token.data) {
                login(token.data);
                onLoginSuccess?.();
                onClose();
              } else {
                throw new Error(token.error?.message);
              }
            } catch (error) {
              handleError(error);
            } finally {
              setIsProcessing(false);
            }
          }
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      handleError(error);
    }
  };

  const handleError = (error: unknown) => {
    setError(error instanceof Error ? error.message : '로그인 처리 중 오류가 발생했습니다.');
  };

  return (
    <Dialog data-cid="Dialog-VT0ye7"
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent data-cid="DialogContent-xSnJhK" className="max-w-xl rounded-lg p-16">
        {!isProcessing ? (
          <>
            <DialogHeader data-cid="DialogHeader-4XqRj7" className="mb-4">
              <DialogTitle data-cid="DialogTitle-DXApVY" className="text-center text-2xl font-bold">로그인</DialogTitle>

              <DialogDescription data-cid="DialogDescription-UTbHBp" className="text-center text-sm text-muted-foreground">
                소중한 물건을 찾고 계신가요? 로그인하고 맞춤 알림을 받아보세요.
              </DialogDescription>
            </DialogHeader>

            <div data-cid="div-4rQRwg" className="space-y-4">
              <SocialLoginButton data-cid="SocialLoginButton-1BSzuD"
                provider="kakao"
                onLogin={() => handleLogin('kakao')}
              />
              <SocialLoginButton data-cid="SocialLoginButton-j95p5W"
                provider="google"
                onLogin={() => handleLogin('google')}
              />
            </div>

            <div data-cid="div-sYOmbO" className="text-destructive text-sm text-center">{error}</div>
          </>
        ) : (
          <LoginProcess data-cid="LoginProcess-SBvomE" />
        )}
      </DialogContent>
    </Dialog>
  );
}
