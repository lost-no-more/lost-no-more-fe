import { useState } from 'react';

import { useItemsSearchListQuery } from '@/domain/search/queries/useItemsSearchListQuery';

const CHUNK_SIZE = 15;

export default function useItemsSearchListByChunk(lostItemIds: number[]) {
  const [cursor, setCursor] = useState(0);
  const { data: lostItems, isFetching: isFethcingLostItems } = useItemsSearchListQuery({
    lostItemIds: lostItemIds.slice(cursor, cursor + CHUNK_SIZE),
  });

  console.log(lostItems);
  const loadMoreLostItems = () => {
    setCursor((prev) => prev + CHUNK_SIZE);
  };

  const resetCursor = () => {
    setCursor(0);
  };

  return {
    lostItems: lostItems?.data.lostItemList ?? [],
    isFethcingLostItems,
    loadMoreLostItems,
    resetCursor,
  };
}
