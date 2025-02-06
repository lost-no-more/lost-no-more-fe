import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const NotificationsSection = () => {
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
            키워드
          </TabsContent>
          <TabsContent value="reception" className="p-6">
            수신
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
