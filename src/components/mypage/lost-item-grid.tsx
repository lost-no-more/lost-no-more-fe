import React, { useRef, useEffect } from 'react';
import { Virtualizer } from '@tanstack/react-virtual';
import LostCard from '../common/lost-card';
import { LostItem } from '@/utils/data';

interface LostItemsGridProps {
  parentRef: React.RefObject<HTMLDivElement | null>;
  virtualizer: Virtualizer<any, any>;
  items: LostItem[];
  loading: boolean;
  onScroll: (e: React.UIEvent<HTMLDivElement>) => void;
}

const LostItemsGrid: React.FC<LostItemsGridProps> = ({
  parentRef,
  virtualizer,
  items,
  loading,
  onScroll,
}) => {
  const CARD_HEIGHT = 256;
  const COLUMNS = 4;
  const contentRef = useRef<HTMLDivElement>(null);
  const isManualScrollRef = useRef(true);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!isManualScrollRef.current) {
      isManualScrollRef.current = true;
      return;
    }
    onScroll(e);
  };

  useEffect(() => {
    if (contentRef.current && parentRef.current) {
      requestAnimationFrame(() => {
        const scrollContainer = parentRef.current;
        if (!scrollContainer) return;

        const isNearBottom =
          scrollContainer.scrollHeight - scrollContainer.scrollTop - scrollContainer.clientHeight <
          100;

        if (isNearBottom) {
          isManualScrollRef.current = false;
          scrollContainer.scrollTop = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        }
      });
    }
  }, [items]);

  if (!loading && items.length === 0) {
    return (
      <div className="flex h-[550px] items-center justify-center">
        <div className="text-center text-gray-500">검색 결과가 없습니다.</div>
      </div>
    );
  }

  return (
    <div className="relative h-[550px] w-[1200px]">
      <div ref={parentRef} className="h-full w-full overflow-auto" onScroll={handleScroll}>
        <div
          ref={contentRef}
          className="relative w-full"
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            background: 'transparent',
          }}
        >
          {virtualizer.getVirtualItems().map((virtualRow) => {
            const rowIndex = virtualRow.index;
            const rowItems = items.slice(rowIndex * COLUMNS, (rowIndex + 1) * COLUMNS);

            if (rowItems.length === 0) return null;

            return (
              <div
                key={virtualRow.key}
                className="absolute left-0 grid w-full grid-cols-4 gap-4"
                style={{
                  top: `${virtualRow.start}px`,
                  height: `${CARD_HEIGHT}px`,
                  transform: `translateZ(0)`,
                }}
              >
                {rowItems.map((item) => (
                  <div key={item.id} className="h-64 w-full">
                    <LostCard
                      name={item.name}
                      image={item.image}
                      category={item.category}
                      location={item.location}
                      acquisitionDate={item.acquisitionDate}
                      size="md"
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LostItemsGrid;
