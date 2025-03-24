import ApiClient from '@/shared/lib/api-client';
import { ApiEndpoint } from '@/shared/types/api-endpoint';
import type { Response } from '@/shared/types/response';

const ITEMS_SEARCH_LIST_REVALIDATE_MS = 60;

export interface ItemsSearchListProps {
  lostItemIds: number[];
}

interface ItemsSerachListData {
  totalCont: number;
  lostItems: {
    lostItemId: number;
    name: string;
    date: string;
    location: string;
    category: string;
    imageUrl: string;
  }[];
}

export type ItemsSearchListResponse = Response<ItemsSerachListData>;

export async function fetchItemsSearchList({
  lostItemIds,
}: ItemsSearchListProps): Promise<ItemsSearchListResponse> {
  return await ApiClient.get(ApiEndpoint.ITEMS_SEARCH_LIST, {
    next: {
      revalidate: ITEMS_SEARCH_LIST_REVALIDATE_MS,
    },
  }).json();
}
