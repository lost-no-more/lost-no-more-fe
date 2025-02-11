'use client';
import { useState, useCallback, useMemo } from 'react';
import LostCard, { LostCardProps } from '../common/lost-card';
import ListView from '../ui/list-view';

const TOTAL_IDS = 100000;
const CHUNK_SIZE = 15;

async function fetchLostItems(ids: number[]): Promise<LostCardProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        ids.map((id) => ({
          name: `분실물 ${id}`,
          image: 'https://sitem.ssgcdn.com/26/64/85/item/1000277856426_i1_750.jpg',
          category: '카테고리',
          location: '습득 장소',
          acquisitionDate: '습득 일자',
        }))
      );
    }, 500);
  });
}

export default function MapPanel() {
  const [items, setItems] = useState<LostCardProps[]>([]);
  const [cursor, setCursor] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  const mockIds = useMemo(() => Array.from({ length: TOTAL_IDS }, (_, i) => i + 1), []);

  const loadMore = useCallback(async () => {
    if (isFetching || cursor >= mockIds.length) return;
    setIsFetching(true);

    const nextIds = mockIds.slice(cursor, cursor + CHUNK_SIZE);
    const newItems = await fetchLostItems(nextIds);

    setItems((prev) => [...prev, ...newItems]);
    setCursor((prev) => prev + CHUNK_SIZE);
    setIsFetching(false);
  }, [cursor, isFetching, mockIds]);

  return (
    <div className="flex h-full flex-col bg-background">
      <p className="w-full border-b border-solid border-border py-3.5 text-center text-base font-extrabold text-foreground">
        분실물 목록
      </p>
      <ListView
        className="w-[314px] py-3 pl-5 pr-3.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar]:w-1.5"
        items={items}
        itemHeight={291}
        renderItem={(item) => <LostCard {...item} />}
        gap={16}
        loadMore={loadMore}
        isFetching={isFetching}
        isInfinite={true}
      />
    </div>
  );
}
