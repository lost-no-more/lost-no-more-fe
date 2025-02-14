import { BellIcon } from 'lucide-react';
import { Card, CardTitle } from '../ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

export default function NotificationPopover() {
  return (
    <Popover data-cid="Popover-vuVU9a">
      <PopoverTrigger data-cid="PopoverTrigger-yLoaCK">
        <BellIcon data-cid="BellIcon-34y3b3" size={32} color="hsl(var(--background))" />
      </PopoverTrigger>
      <PopoverContent data-cid="PopoverContent-5eobbE" asChild>
        <Card data-cid="Card-TkZGXv" className="w-[260px]">
          <CardTitle data-cid="CardTitle-aKjBHU" className="pb-2">
            알림
          </CardTitle>
          <ul data-cid="ul-RZyQ3m">
            <li data-cid="li-zJqB9G">
              <div
                data-cid="div-o2yuQB"
                className="border-1 border-t border-solid border-border px-1 py-3"
              >
                <p data-cid="p-GaVLNg" className="mb-1 line-clamp-2 w-full text-sm text-foreground">
                  2025.01.11 오전 6시 기준 &apos;에어팟&apos; 키워드가 포함된 물품이 18건
                  등록되었습니다.
                </p>
                <p data-cid="p-bIUsON" className="text-sm text-secondary-foreground">
                  01. 11. 04:00
                </p>
              </div>
              <div
                data-cid="div-e84c1R"
                className="border-1 border-t border-solid border-border px-1 py-3"
              >
                <p data-cid="p-ueL0S9" className="mb-1 line-clamp-2 w-full text-sm text-foreground">
                  2025.01.11 오전 6시 기준 &apos;에어팟&apos; 키워드가 포함된 물품이 18건
                  등록되었습니다.
                </p>
                <p data-cid="p-ZWdRVm" className="text-sm text-secondary-foreground">
                  01. 11. 04:00
                </p>
              </div>
            </li>
          </ul>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
