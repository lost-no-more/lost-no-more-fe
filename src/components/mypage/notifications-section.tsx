import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle, CardDescription, CardHeader } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import KeywordInput from '@/components/mypage/keyword-input';
import KeywordList from '@/components/mypage/keyword-list';
import KeywordSettings from '@/components/mypage/keyword-settings';
import CustomSwitch from '@/components/common/custom-switch';

export const NotificationsSection = () => {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [emailNotification, setEmailNotification] = useState(false);

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
      <CardContent className="space-y-6 p-0">
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
          <TabsContent value="keyword" className="relative min-h-[500px] overflow-hidden px-2">
            <div
              className={`absolute flex h-full w-[200%] transform transition-transform duration-300 ease-in-out ${
                isSettingsVisible ? '-translate-x-1/2' : 'translate-x-0'
              }`}
            >
              <div className="w-full p-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-xl">키워드 알림 설정</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    검색 시 기본적으로 적용되는 위치를 설정합니다.
                  </CardDescription>
                </CardHeader>
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
          <TabsContent value="reception" className="space-y-4 px-8 py-6">
            <CardHeader className="p-0">
              <CardTitle className="text-xl">알림 수신 설정</CardTitle>
              <CardDescription className="text-muted-foreground">
                알림을 수신할 채널을 설정합니다.
              </CardDescription>
            </CardHeader>
            <CustomSwitch
              title="이메일 알림"
              description="키워드 등록한 분실물 발견 시 이메일로 알림"
              checked={emailNotification}
              onCheckedChange={setEmailNotification}
            />
            <CardHeader className="p-0">
              <Button className="mt-6 w-full" type="button">
                알림 설정
              </Button>
            </CardHeader>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
