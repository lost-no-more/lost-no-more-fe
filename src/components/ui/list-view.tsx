'use client';
import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { cn } from '@/lib/utils';

interface ListViewProps<T> {
  items: T[];
  itemHeight: number;
  className: string;
  renderItem: (item: T) => React.ReactNode;
  gap: number;
}

export default function ListView<T>({
  items,
  itemHeight,
  className,
  renderItem,
  gap,
}: ListViewProps<T>) {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => itemHeight,
    gap: gap,
    overscan: 2,
  });

  return (
    <div ref={parentRef} className={cn('h-full w-full overflow-y-auto', className)}>
      <div className="relative w-full" style={{ height: `${virtualizer.getTotalSize()}px` }}>
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.index}
            className="absolute left-0 w-full"
            style={{
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            {renderItem(items[virtualItem.index])}
          </div>
        ))}
      </div>
    </div>
  );
}
