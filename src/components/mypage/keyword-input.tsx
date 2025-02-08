import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface KeywordInputProps {
  addKeyword: (keyword: string) => void;
}

export default function KeywordInput({ addKeyword }: KeywordInputProps) {
  const [keyword, setKeyword] = useState('');

  const handleAdd = () => {
    if (keyword.trim()) {
      addKeyword(keyword);
      setKeyword('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="my-4 flex">
      <Input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="키워드 입력"
        className="mr-4 h-12 flex-1 font-semibold"
      />
      <Button className="h-12 w-20 text-base font-semibold" onClick={handleAdd}>
        등록
      </Button>
    </div>
  );
}
