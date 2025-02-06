import React, { useState } from 'react';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import KeywordInput from '@/components/mypage/keyword-input';
import KeywordList from '@/components/mypage/keyword-list';

export const NotificationsSection = () => {
  const [keywords, setKeywords] = useState<string[]>([]);

  const addKeyword = (keyword: string) => {
    if (keyword && !keywords.includes(keyword)) {
      setKeywords([...keywords, keyword]);
    }
  };

  const removeKeyword = (removeKeyword: string) => {
    setKeywords(keywords.filter((kw) => kw !== removeKeyword));
  };

  return (
    <Card>
      <CardContent className="space-y-6">
        <Tabs defaultValue="keyword" className="w-full pt-5">
          <TabsList className="w-full rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="keyword"
              className="h-9 flex-1 rounded-none border-b-2 border-b-transparent bg-transparent pb-5 pt-2 text-base font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
            >
              키워드
            </TabsTrigger>
            <TabsTrigger
              value="reception"
              className="h-9 flex-1 rounded-none border-b-2 border-b-transparent bg-transparent pb-5 pt-2 text-base font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-2 data-[state=active]:border-b-primary data-[state=active]:text-primary data-[state=active]:shadow-none"
            >
              수신
            </TabsTrigger>
          </TabsList>
          <TabsContent value="keyword" className="p-6">
            <CardTitle className="text-xl">키워드 알림 설정</CardTitle>
            <CardDescription className="text-muted-foreground">
              검색 시 기본적으로 적용되는 위치를 설정합니다.
            </CardDescription>
            <KeywordInput addKeyword={addKeyword} />
            <KeywordList keywords={keywords} removeKeyword={removeKeyword} />
          </TabsContent>
          <TabsContent value="reception" className="p-6">
            수신
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
