import type { LostCategory, LostLocation } from '@/shared/types/lost-property';
import { create } from 'zustand';
import { combine } from 'zustand/middleware';

interface SearchState {
  keyword: string;
  category: LostCategory | null;
  location: LostLocation | null;
  dateStart: Date | null;
  dateEnd: Date | null;
  topLeftLat: number | null;
  topLeftLon: number | null;
  bottomRightLat: number | null;
  bottomRightLon: number | null;
}

interface SearchActions {
  updateKeyword: (keyword: string) => void;
  updateCategory: (category: LostCategory) => void;
  updateLocation: (location: LostLocation) => void;
  updateDateStart: (dateStart: Date) => void;
  updateDateEnd: (dateEnd: Date) => void;
  updateTopLeftLat: (topLeftLat: number) => void;
  updateTopLeftLon: (topLeftLon: number) => void;
  updateBottomRightLat: (bottomRightLat: number) => void;
  updateBottomRightLon: (bottomRightLon: number) => void;
}

const useSearchStore = create(
  combine<SearchState, SearchActions>(
    {
      keyword: '',
      category: null,
      location: null,
      dateStart: null,
      dateEnd: null,
      topLeftLat: null,
      topLeftLon: null,
      bottomRightLat: null,
      bottomRightLon: null,
    },
    (set) => ({
      updateKeyword: (keyword) => set({ keyword }),
      updateCategory: (category) => set({ category }),
      updateLocation: (location) => set({ location }),
      updateDateStart: (dateStart) => set({ dateStart }),
      updateDateEnd: (dateEnd) => set({ dateEnd }),
      updateTopLeftLat: (topLeftLat) => set({ topLeftLat }),
      updateTopLeftLon: (topLeftLon) => set({ topLeftLon }),
      updateBottomRightLat: (bottomRightLat) => set({ bottomRightLat }),
      updateBottomRightLon: (bottomRightLon) => set({ bottomRightLon }),
    })
  )
);

export default useSearchStore;
