import Link from 'next/link';
import LogoIcon from '../icons/logo-icon';
import NotificationPopover from './notification-popover';
import Searchbar from './searchbar';
import UserButton from './user-button';

export default function Headerbar() {
  return (
    <div
      data-cid="div-s81bjq"
      className="flex w-full items-center justify-between bg-primary px-10 py-5"
    >
      <Link data-cid="Link-dHEpf9" href="/">
        <LogoIcon data-cid="LogoIcon-qj0T1V" width={50} height={50} fill="hsl(var(--background))" />
      </Link>
      <Searchbar data-cid="Searchbar-ayrkwF" />
      <div data-cid="div-VjJKzV" className="flex items-center gap-4">
        <NotificationPopover data-cid="NotificationPopover-Rhye8g" />
        <UserButton data-cid="UserButton-1ZBmBu" />
      </div>
    </div>
  );
}
