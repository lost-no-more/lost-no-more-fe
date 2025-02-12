'use client';

import { SearchIcon } from 'lucide-react';
import { useState, useRef } from 'react';

export default function Searchbar() {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      data-cid="div-CKhgXS"
      className={`flex w-96 items-center gap-2 rounded-lg bg-background px-3 py-2.5 ${isFocused ? 'outline outline-2 outline-foreground' : ''}`}
    >
      <SearchIcon data-cid="SearchIcon-rg3Mtd" size={20} color="hsl(var(--primary))" />
      <input
        data-cid="input-xsnCOm"
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full text-start text-base focus:outline-none"
        placeholder="분실물 검색"
      />
      <div data-cid="div-7UNXRe" className="flex items-center justify-center gap-6"></div>
    </div>
  );
}
