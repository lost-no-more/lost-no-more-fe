import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import KakaotalkIcon from '../icons/kakaotalk-icon';
import GoogleIcon from '../icons/google-icon';

interface LoginPopupProps {
  open: boolean;
  onClose: () => void;
}

const LoginForm = () => (
  <div className="space-y-4">
    <Input type="email" placeholder="이메일" className="h-12" />
    <Input type="password" placeholder="패스워드" className="h-12" />
    <div className="flex items-center space-x-2">
      <Checkbox id="remember" />
      <label htmlFor="remember" className="text-sm text-muted-foreground">
        로그인 상태 유지
      </label>
    </div>
  </div>
);

export default function LoginPopup({ open, onClose }: LoginPopupProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl rounded-lg p-24">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-center text-2xl font-bold">로그인</DialogTitle>
          <DialogDescription className="text-center text-xs text-muted-foreground">
            소중한 물건을 찾고 계신가요? 로그인하고 맞춤 알림을 받아보세요.
          </DialogDescription>
        </DialogHeader>
        <Button className="relative flex h-11 w-full items-center bg-gray-100 text-lg font-bold text-black hover:bg-gray-200">
          <KakaotalkIcon
            className="absolute left-4"
            width={24}
            height={24}
            fill="hsl(var(--secondary-foreground))"
          />
          <span className="mx-auto">Kakao로 로그인</span>
        </Button>
        <Button className="relative flex h-11 w-full items-center bg-gray-100 text-lg font-bold text-black hover:bg-gray-200">
          <GoogleIcon
            className="absolute left-4"
            width={24}
            height={24}
            fill="hsl(var(--secondary-foreground))"
          />
          <span className="mx-auto">Google로 로그인</span>
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-2 text-xs text-muted-foreground">
              다른 방법으로 로그인
            </span>
          </div>
        </div>
        <LoginForm />
        <DialogFooter>
          <Button className="mt-4 h-11 w-full rounded-md bg-primary text-lg font-bold hover:bg-primary/90">
            로그인
          </Button>
        </DialogFooter>
        <div className="flex justify-center gap-2 text-sm">
          <span className="text-muted-foreground">아직 회원이 아니신가요?</span>
          <Button variant="link" className="h-auto p-0">
            회원가입
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
