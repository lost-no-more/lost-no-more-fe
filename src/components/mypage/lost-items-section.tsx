import React, { useState } from 'react';
import { Card, CardContent, CardTitle, CardHeader, CardDescription } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import LostCard from '../common/lost-card';

export const LostItemsSection = () => {
  const [displayCount, setDisplayCount] = useState(8);

  const dummyData = Array.from({ length: 32 }).map((_, index) => ({
    id: index,
    name: `습득물 ${index + 1}`,
    image: 'https://sitem.ssgcdn.com/26/64/85/item/1000277856426_i1_750.jpg',
    category: '지갑',
    location: '부산광역시',
    acquisitionDate: '2024. 12. 31',
  }));

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 8, dummyData.length));
  };

  const displayedItems = dummyData.slice(0, displayCount);
  const hasMore = displayCount < dummyData.length;

  return (
    <Card className="px-2">
      <CardHeader>
        <CardTitle className="text-xl">내 위치 설정</CardTitle>
        <CardDescription className="text-muted-foreground">
          검색 시 기본적으로 적용되는 위치를 설정합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 키워드 선택 */}
        <Select>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="키워드를 선택하세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">에어팟</SelectItem>
              <SelectItem value="banana">프라이탁 가방</SelectItem>
              <SelectItem value="blueberry">축구공</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* 분실물 그리드 - 고정된 크기 */}
        <div className="h-[550px] w-[1200px] overflow-y-auto">
          <div className="grid grid-cols-4 gap-4">
            {displayedItems.map((item) => (
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
        </div>

        {/* 더보기 버튼 */}
        {hasMore && (
          <div className="mt-6">
            <Button className="w-full" onClick={handleLoadMore}>
              더보기 ({displayCount}/{dummyData.length})
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
