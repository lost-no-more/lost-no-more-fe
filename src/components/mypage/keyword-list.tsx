import React from 'react';
import { Button } from '@/components/ui/button';
import { SlidersHorizontal, Trash2 } from 'lucide-react';

interface KeywordListProps {
  keywords: string[];
  removeKeyword: (keyword: string) => void;
}

export default function KeywordList({ keywords, removeKeyword }: KeywordListProps) {
  return (
    <ul>
      {keywords.map((kw) => (
        <li key={kw} className="mb-2 flex items-center justify-between rounded-lg bg-secondary p-2">
          <span className="px-2 font-semibold text-secondary-foreground">{kw}</span>
          <div className="flex items-center">
            <Button variant="ghost">
              <SlidersHorizontal
                className="h-5 w-5"
                color="hsl(var(--secondary-foreground))"
                strokeWidth={2.5}
              />
            </Button>
            <Button variant="ghost" onClick={() => removeKeyword(kw)}>
              <Trash2
                className="h-5 w-5"
                color="hsl(var(--secondary-foreground))"
                strokeWidth={2.5}
              />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
