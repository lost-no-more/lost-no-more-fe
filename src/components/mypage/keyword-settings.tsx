'use client';

import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LostLocations, LostCategories } from '@/types/lost-property';
import { MultiSelect } from '@/components/mypage/multi-select';
import {
  ChevronLeft,
  X,
  Briefcase,
  Gem,
  Book,
  FileText,
  Package,
  ShoppingBag,
  Dumbbell,
  Music,
  DollarSign,
  Shirt,
  Car,
  Smartphone,
  Wallet,
  ScrollText,
  Monitor,
  CreditCard,
  Banknote,
  Phone,
  Box,
} from 'lucide-react';

const categoryIcons = {
  가방: Briefcase,
  귀금속: Gem,
  도서용품: Book,
  무주물: Package,
  서류: FileText,
  산업용품: Package,
  쇼핑백: ShoppingBag,
  스포츠용품: Dumbbell,
  악기: Music,
  유가증권: DollarSign,
  의류: Shirt,
  자동차: Car,
  전자기기: Smartphone,
  지갑: Wallet,
  증명서: ScrollText,
  컴퓨터: Monitor,
  카트: CreditCard,
  현금: Banknote,
  휴대폰: Phone,
  기타물품: Box,
  유류품: Box,
};

const CategoriesList = LostCategories.filter((category) => category !== '전체').map((category) => ({
  value: category,
  label: category,
  icon: categoryIcons[category],
}));

interface KeywordSettingsProps {
  keyword: string;
  onBackClick: () => void;
  updateKeyword: (oldKeyword: string, newKeyword: string) => void;
}

export default function KeywordSettings({
  keyword,
  onBackClick,
  updateKeyword,
}: KeywordSettingsProps) {
  const [keywordInput, setKeywordInput] = useState(keyword);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleClearInput = () => {
    setKeywordInput('');
    setError('');
  };

  const handleUpdateKeyword = () => {
    if (!keywordInput.trim()) {
      setError('키워드를 입력해주세요');
      return;
    }
    updateKeyword(keyword, keywordInput);
    onBackClick();
  };

  return (
    <div className="h-full w-full">
      <div className="mb-6 flex items-center">
        <Button variant="ghost" onClick={onBackClick} className="mr-5 px-2">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-xl font-semibold">알림 조건 설정</h2>
      </div>
      <div className="space-y-6">
        {/* 키워드 입력 */}
        <div className="space-y-1">
          <Label htmlFor="keyword">키워드</Label>
          <div className="relative">
            <Input
              id="keyword"
              value={keywordInput}
              onChange={(e) => {
                setKeywordInput(e.target.value);
                if (error) setError('');
              }}
              className={`w-full border-transparent bg-secondary pr-10 text-base font-semibold text-secondary-foreground ${
                error ? 'border-red-500' : ''
              }`}
            />
            {keywordInput && (
              <Button
                variant="ghost"
                onClick={handleClearInput}
                className="absolute right-0 top-1/2 -translate-y-1/2 transform py-2 text-secondary-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
        {/* 카테고리 선택 */}
        <div className="space-y-1">
          <Label>카테고리 (중복 선택 가능)</Label>
          <MultiSelect
            options={CategoriesList}
            onValueChange={setSelectedCategories}
            defaultValue={selectedCategories}
            placeholder="카테고리를 선택하세요."
            variant="inverted"
            maxCount={3}
          />
        </div>
        {/* 지역 선택 */}
        <div className="space-y-2">
          <Label>지역</Label>
          <Select onValueChange={setSelectedLocation} value={selectedLocation}>
            <SelectTrigger className="w-60">
              <SelectValue placeholder="지역을 선택하세요." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {LostLocations.map((loc) => (
                  <SelectItem key={loc} value={loc}>
                    {loc}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleUpdateKeyword} className="w-full">
          키워드 업데이트
        </Button>
      </div>
    </div>
  );
}
