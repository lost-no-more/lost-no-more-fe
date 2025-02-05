import IconInput from '@/components/common/icon-input';
import SearchIcon from '../icons/search-icon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import LocationIcon from '../icons/location-icon';
import { LostLocations, LostCategories } from '@/types/lost-property';
import CategoryIcon from '../icons/category-icon';

export default function SearchArea() {
  return (
    <>
      <IconInput
        className="mb-4"
        slots={{
          icon: () => <SearchIcon width={32} height={32} fill="hsl(var(--secondary-foreground))" />,
          input: () => (
            <input
              className="w-full bg-background outline-none"
              type="text"
              placeholder={'무엇을 잃어버리셨나요?'}
            />
          ),
        }}
      />
      <div className="flex items-center gap-6">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <IconInput
              slots={{
                icon: () => (
                  <LocationIcon width={31.61} height={28} fill="hsl(var(--secondary-foreground))" />
                ),
                input: () => <p className="w-full bg-background">지역</p>,
              }}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              {LostLocations.map((location) => (
                <DropdownMenuItem key={location}>{location}</DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <IconInput
              slots={{
                icon: () => (
                  <CategoryIcon width={31.61} height={28} fill="hsl(var(--secondary-foreground))" />
                ),
                input: () => <p className="w-full bg-background">상품 카테고리</p>,
              }}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              {LostCategories.map((category) => (
                <DropdownMenuItem key={category}>{category}</DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <button className="whitespace-nowrap rounded-xl bg-secondary-foreground px-8 py-[10px] text-center text-2xl font-bold text-secondary">
          검색
        </button>
      </div>
    </>
  );
}
