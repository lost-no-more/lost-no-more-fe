import React, { useState } from 'react';
import { Card, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import KeywordInput from '@/components/mypage/keyword-input';
import KeywordList from '@/components/mypage/keyword-list';
import KeywordSettings from '@/components/mypage/keyword-settings';

export const NotificationsSection = () => {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const addKeyword = (keyword: string) => {
    if (keyword && !keywords.includes(keyword)) {
      setKeywords([...keywords, keyword]);
    }
  };

  const removeKeyword = (removeKeyword: string) => {
    setKeywords(keywords.filter((kw) => kw !== removeKeyword));
  };

  const handleSettingsClick = (keyword: string) => {
    setSelectedKeyword(keyword);
    setIsSettingsVisible(true);
  };

  const handleBackClick = () => {
    setIsSettingsVisible(false);
    setSelectedKeyword(null);
  };

  const updateKeyword = (oldKeyword: string, newKeyword: string) => {
    setKeywords(keywords.map((kw) => (kw === oldKeyword ? newKeyword : kw)));
    setSelectedKeyword(newKeyword);
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
          <TabsContent value="keyword" className="relative min-h-[400px] overflow-hidden">
            <div
              className={`absolute flex h-full w-[200%] transform transition-transform duration-300 ease-in-out ${
                isSettingsVisible ? '-translate-x-1/2' : 'translate-x-0'
              }`}
            >
              <div className="w-full p-6">
                <CardTitle className="text-xl">키워드 알림 설정</CardTitle>
                <CardDescription className="text-muted-foreground">
                  검색 시 기본적으로 적용되는 위치를 설정합니다.
                </CardDescription>
                <KeywordInput addKeyword={addKeyword} />
                <KeywordList
                  keywords={keywords}
                  removeKeyword={removeKeyword}
                  onSettingsClick={handleSettingsClick}
                />
              </div>
              <div className="w-full p-6">
                {selectedKeyword && (
                  <KeywordSettings
                    keyword={selectedKeyword}
                    onBackClick={handleBackClick}
                    updateKeyword={updateKeyword}
                  />
                )}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reception" className="p-6">
            수신
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
