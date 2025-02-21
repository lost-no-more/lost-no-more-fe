'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import type { LostCategory, LostLocation } from '@/shared/types/lost-property';
import { buildContext } from '@/shared/utils/build-context';

/* eslint-disable @typescript-eslint/no-empty-function */

/**
 * SearchContextProps
 * @interface
 * @property {string | null} keyword - 검색 키워드
 * @property {Dispatch<SetStateAction<string | null>>} setKeyword - 검색 키워드를 설정하는 함수
 * @property {LostLocation | null} location - 검색 지역
 * @property {Dispatch<SetStateAction<LostLocation | null>>} setLocation - 검색 지역을 설정하는 함수
 * @property {LostCategory | null} category - 검색 카테고리
 * @property {Dispatch<SetStateAction<LostCategory | null>>} setCategory - 검색 카테고리를 설정하는 함수
 */
interface SearchContextProps {
  keyword: string | null;
  setKeyword: Dispatch<SetStateAction<string | null>>;
  location: LostLocation | null;
  setLocation: Dispatch<SetStateAction<LostLocation | null>>;
  category: LostCategory | null;
  setCategory: Dispatch<SetStateAction<LostCategory | null>>;
}

const [_SearchContext, useSearchContext] = buildContext<SearchContextProps>('Search', {
  keyword: null,
  setKeyword: () => {},
  location: null,
  setLocation: () => {},
  category: null,
  setCategory: () => {},
});

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [keyword, setKeyword] = useState<string | null>(null);
  const [location, setLocation] = useState<LostLocation | null>(null);
  const [category, setCategory] = useState<LostCategory | null>(null);

  return (
    <_SearchContext
      data-cid="_SearchContext-1Xzr5q"
      keyword={keyword}
      setKeyword={setKeyword}
      location={location}
      setLocation={setLocation}
      category={category}
      setCategory={setCategory}
    >
      {children}
    </_SearchContext>
  );
};

export { SearchProvider, useSearchContext };
