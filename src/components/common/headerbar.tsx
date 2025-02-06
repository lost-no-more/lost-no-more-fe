import Link from 'next/link';
import LogoIcon from '../icons/logo-icon';
import NotificationPopover from './notification-popover';
import Searchbar from './searchbar';
import UserButton from './user-button';

export default function Headerbar() {
  return (
    <div className="sticky flex w-full items-center justify-between bg-primary px-10 py-5">
      <Link href="/">
        <LogoIcon width={50} height={50} fill="hsl(var(--background))" />
      </Link>
      <Searchbar />
      <div className="flex items-center gap-4">
        <NotificationPopover />
        <UserButton />
      </div>
    </div>
  );
}
