'use client';
import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { cn } from '@/lib/utils';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import SkeletonView from '../common/skeleton-view';

interface ListViewProps<T> {
  items: T[];
  itemHeight: number;
  className?: string;
  renderItem: (item: T) => React.ReactNode;
  gap: number;
  isFetching?: boolean;
  loadMore?: () => Promise<void>;
  isInfinite?: boolean;
}

/**
 * 가상화된 무한스크롤을 지원하는 리스트뷰
 * @param items 리스트 아이템
 * @param itemHeight 아이템 컴포넌트의 높이(px)
 * @param className 클래스명(스크롤바 및 width 설정)
 * @param renderItem 아이템 렌더props 함수
 * @param gap 아이템간 간격(px)
 * @param isFetching 데이터 로딩중인지 여부
 * @param loadMore 더 불러오기 함수
 * @param isInfinite 무한스크롤 여부
 * @returns 리스트뷰 컴포넌트
 *
 * @example
 * <ListView
 *   className="w-[314px] px-5 py-3 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar]:w-1.5"
 *   items={items}
 *   itemHeight={291}
 *   renderItem={(item) => <LostCard {...item} />}
 *   gap={16}
 *   loadMore={loadMore}
 *   isFetching={isFetchingRef.current}
 *   isInfinite={true}
 * />
 */
export default function ListView<T>({
  items,
  itemHeight,
  className,
  renderItem,
  gap,
  isFetching,
  loadMore,
  isInfinite = false,
}: ListViewProps<T>) {
  const parentRef = useRef<HTMLDivElement>(null);
  const loadMoreRef = useIntersectionObserver({ onIntersect: loadMore });
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
            className="absolute left-0 top-0 w-full"
            style={{
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            {renderItem(items[virtualItem.index])}
          </div>
        ))}
      </div>
      {/* 데이터 로딩중일 때 로딩 스피너 */}
      {isFetching && (
        <div className="flex flex-col" style={{ gap: `${gap}px` }}>
          {Array.from({ length: 3 }).map((_, i) => (
            <SkeletonView key={i} height={`${itemHeight}px`} width="100%" />
          ))}
        </div>
      )}
      {/* 리스트뷰 끝에 도달했을 때 더 불러오기 */}
      {isInfinite && loadMore && !isFetching && <div ref={loadMoreRef} />}
    </div>
  );
}
