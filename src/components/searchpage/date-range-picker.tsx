'use client';

import { format, subDays } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Calendar } from '../ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { CalendarIcon } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface DateRangePickerProps {
  className?: string;
  onChange?: (range: DateRange | undefined) => void;
}

export function DateRangePicker({ className, onChange }: DateRangePickerProps) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: subDays(new Date(), 7),
    to: new Date(),
  });

  const handleSelect = (range: DateRange | undefined) => {
    setDate(range);
    onChange?.(range);
  };

  return (
    <div data-cid="div-ZsdQPV" className={cn('grid gap-2', className)}>
      <Popover data-cid="Popover-bC48hf">
        <PopoverTrigger data-cid="PopoverTrigger-VmejP4" asChild>
          <Button
            data-cid="Button-wf4vkc"
            variant="outline"
            className={cn(
              'h-[32px] w-[300px] justify-start rounded-lg border-2 border-solid border-border bg-background text-left font-normal text-foreground',
              !date && 'text-muted-foreground'
            )}
          >
            <CalendarIcon
              data-cid="CalendarIcon-ZwbD8P"
              className="mr-3.5 h-4 w-4"
              color="hsl(var(--foreground))"
            />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'PPP', { locale: ko })} -{' '}
                  {format(date.to, 'PPP', { locale: ko })}
                </>
              ) : (
                format(date.from, 'PPP', { locale: ko })
              )
            ) : (
              <span data-cid="span-LyiP22">날짜 범위 선택</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent data-cid="PopoverContent-wuYcR3" className="w-auto p-0">
          <Calendar
            locale={ko}
            data-cid="Calendar-r7YVaC"
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleSelect}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
