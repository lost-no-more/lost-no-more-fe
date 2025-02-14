import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { KeywordType } from '@/utils/data';

interface KeywordSelectProps {
  keyword: KeywordType;
  onKeywordChange: (value: KeywordType) => void;
}

const KeywordSelect: React.FC<KeywordSelectProps> = ({ keyword, onKeywordChange }) => {
  return (
    <Select onValueChange={onKeywordChange} value={keyword}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="키워드를 선택하세요" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">전체</SelectItem>
          <SelectItem value="airpods">에어팟</SelectItem>
          <SelectItem value="freitag">프라이탁 가방</SelectItem>
          <SelectItem value="football">축구공</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default KeywordSelect;
