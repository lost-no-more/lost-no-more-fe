import type { LostCategory, LostLocation } from '@/shared/types/lost-property';

export interface KeywordItem {
  id: string;
  text: string;
  category: LostCategory;
  location: LostLocation;
}

export interface UpdateKeywordListParams {
  keywords: KeywordItem[];
  keywordId: string;
  updatedKeyword: Omit<KeywordItem, 'id'>;
}