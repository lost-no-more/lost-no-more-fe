import { BellIcon } from 'lucide-react';
import { Card, CardTitle } from '../ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

export default function NotificationPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <BellIcon size={32} color="hsl(var(--background))" />
      </PopoverTrigger>
      <PopoverContent asChild>
        <Card className="w-[260px]">
          <CardTitle className="pb-2">알림</CardTitle>
          <ul>
            <li>
              <div className="border-1 border-t border-solid border-border px-1 py-3">
                <p className="mb-1 line-clamp-2 w-full text-sm text-foreground">
                  2025.01.11 오전 6시 기준 &apos;에어팟&apos; 키워드가 포함된 물품이 18건
                  등록되었습니다.
                </p>
                <p className="text-sm text-secondary-foreground">01. 11. 04:00</p>
              </div>
              <div className="border-1 border-t border-solid border-border px-1 py-3">
                <p className="mb-1 line-clamp-2 w-full text-sm text-foreground">
                  2025.01.11 오전 6시 기준 &apos;에어팟&apos; 키워드가 포함된 물품이 18건
                  등록되었습니다.
                </p>
                <p className="text-sm text-secondary-foreground">01. 11. 04:00</p>
              </div>
            </li>
          </ul>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
