'use client';

import React, { useState } from 'react';

import { authApi } from '@/api/auth';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

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
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent className="max-w-xl rounded-lg p-16">
        {!isProcessing ? (
          <>
            <DialogHeader className="mb-4">
              <DialogTitle className="text-center text-2xl font-bold">로그인</DialogTitle>

              <DialogDescription className="text-center text-sm text-muted-foreground">
                소중한 물건을 찾고 계신가요? 로그인하고 맞춤 알림을 받아보세요.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <SocialLoginButton
                provider="kakao"
                onLogin={() => handleLogin('kakao')}
              />
              <SocialLoginButton
                provider="google"
                onLogin={() => handleLogin('google')}
              />
            </div>

            <div className="text-destructive text-sm text-center">{error}</div>
          </>
        ) : (
          <LoginProcess />
        )}
      </DialogContent>
    </Dialog>
  );
}
