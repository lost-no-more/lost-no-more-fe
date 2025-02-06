import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const NotificationsSection = () => {
  return (
    <Card>
      <CardContent className="space-y-6">
        <Tabs defaultValue="keyword" className="w-full pt-5">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="keyword">키워드</TabsTrigger>
            <TabsTrigger value="reception">수신</TabsTrigger>
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
