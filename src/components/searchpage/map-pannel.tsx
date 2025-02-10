'use client';
import LostCard, { LostCardProps } from '../common/lost-card';
import ListView from '../ui/list-view';

export default function MapPannel() {
  const items: LostCardProps[] = Array.from({ length: 1000 }, (_, index) => ({
    name: `분실물 ${index + 1}`,
    image: 'https://sitem.ssgcdn.com/26/64/85/item/1000277856426_i1_750.jpg',
    category: '카테고리',
    location: '습득 장소',
    acquisitionDate: '습득 일자',
  }));

  return (
    <div className="flex h-full flex-col bg-background">
      <p className="w-full border-b border-solid border-border py-3.5 text-center text-base font-extrabold text-foreground">
        분실물 목록
      </p>
      <ListView
        className="w-[314px] px-5 py-3 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar]:w-1.5"
        items={items}
        itemHeight={291}
        renderItem={(item) => <LostCard {...item} />}
        gap={16}
      />
    </div>
  );
}
