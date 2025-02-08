import React, { useState } from 'react';
import { ChevronLeft, X } from 'lucide-react';
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
import { LostLocations } from '@/types/lost-property';

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

  const handleClearInput = () => {
    setKeywordInput('');
  };

  const handleUpdateKeyword = () => {
    updateKeyword(keyword, keywordInput);
    onBackClick();
  };

  return (
    <div className="h-full w-full">
      {/* Header */}
      <div className="mb-6 flex items-center">
        <Button variant="ghost" onClick={onBackClick} className="mr-5 px-2">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h2 className="text-xl font-semibold">알림 조건 설정</h2>
      </div>

      {/* Content */}
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="keyword">키워드</Label>
          <div className="relative">
            <Input
              id="keyword"
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              className="w-full border-transparent bg-secondary pr-10 text-base font-semibold text-secondary-foreground"
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
        </div>
        <div className="space-y-2">
          <Label>지역</Label>
          <Select>
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
