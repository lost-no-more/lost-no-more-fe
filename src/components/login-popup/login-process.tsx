import { Loader2 } from 'lucide-react';

export default function LoginProcess() {

  return (
    <div className="py-8 flex flex-col items-center justify-center space-y-4">
      <Loader2 className="h-8 w-8 text-primary animate-spin" />
      <div className="space-y-2 text-center">
        <h3 className="text-lg font-medium">소셜 로그인 진행 중</h3>
        <p className="text-sm text-muted-foreground">잠시만 기다려주세요...</p>
      </div>
    </div>
  );
}
