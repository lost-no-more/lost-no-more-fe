import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LostLocations } from '@/types/lost-property';

export const LocationsSection = () => {
  return (
    <Card className="px-2">
      <CardHeader>
        <CardTitle className="text-xl">내 위치 설정</CardTitle>
        <CardDescription className="text-muted-foreground">
          검색 시 기본적으로 적용되는 위치를 설정합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="mb-6">
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
      </CardContent>
      <CardFooter>
        <Button className="w-full">내 위치 설정하기</Button>
      </CardFooter>
    </Card>
  );
};
