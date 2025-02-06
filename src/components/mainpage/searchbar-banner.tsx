import Link from 'next/link';
import LogoIcon from '../icons/logo-icon';
import SearchIcon from '../icons/search-icon';
import IconInput from '../common/icon-input';
import LocationIcon from '../icons/location-icon';
import CategoryIcon from '../icons/category-icon';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { LostCategories, LostLocations } from '@/types/lost-property';
import NotificationPopover from '../common/notification-popover';
import UserButton from '../common/user-button';

export default function SearchbarBanner() {
  return (
    <div className="flex w-full justify-center bg-primary">
      <div className="flex w-[890px] flex-col py-20">
        <div className="mb-4 flex w-full items-center justify-between">
          <Link href="/">
            <div className="flex items-center">
              <LogoIcon className="mr-4" width={50} height={50} fill="hsl(var(--background))" />
              <h1 className="text-xl font-bold text-background">잃.없.다</h1>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <NotificationPopover />
            <UserButton />
          </div>
        </div>
        <p className="mb-[60px] text-xl text-background">
          모든 분실물을 한눈에, 걱정할 일 없는 일상을 한번에
        </p>
        <IconInput
          className="mb-4"
          slots={{
            icon: () => (
              <SearchIcon width={32} height={32} fill="hsl(var(--secondary-foreground))" />
            ),
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
                    <LocationIcon
                      width={31.61}
                      height={28}
                      fill="hsl(var(--secondary-foreground))"
                    />
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
                    <CategoryIcon
                      width={31.61}
                      height={28}
                      fill="hsl(var(--secondary-foreground))"
                    />
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
      </div>
    </div>
  );
}
