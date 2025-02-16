import Link from 'next/link';

import NotificationPopover from '../common/notification-popover';
import UserButton from '../common/user-button';
import LogoIcon from '../icons/logo-icon';
import SearchArea from './search-area';

export default function SearchbarBanner() {
  return (
    <div data-cid="div-aOTfH3" className="flex w-full justify-center bg-primary">
      <div data-cid="div-INITCj" className="flex w-[890px] flex-col py-20">
        <div data-cid="div-mgh27T" className="mb-4 flex w-full items-center justify-between">
          <Link data-cid="Link-qQ1cKZ" href="/">
            <div data-cid="div-VqwlzM" className="flex items-center">
              <LogoIcon
                data-cid="LogoIcon-GURMLb"
                className="mr-4"
                width={50}
                height={50}
                fill="hsl(var(--background))"
              />
              <h1 data-cid="h1-2hKwzK" className="text-xl font-bold text-background">
                잃.없.다
              </h1>
            </div>
          </Link>
          <div
            data-cid="div-6R7jNw"
            className="flex items-center gap-4"
          >
            <NotificationPopover data-cid="NotificationPopover-aluuHf" />
            <UserButton data-cid="UserButton-dmwzgv" />
          </div>
        </div>
        <p data-cid="p-hpNepI" className="mb-[60px] text-xl text-background">
          모든 분실물을 한눈에, 걱정할 일 없는 일상을 한번에
        </p>
        <SearchArea data-cid="SearchArea-nhTEgC" />
      </div>
    </div>
  );
}
