import { UserIcon } from 'lucide-react';

export default function UserButton() {
  return (
    <button className="group rounded-sm p-2 hover:bg-background hover:text-primary">
      <UserIcon size={32} className="text-background group-hover:text-primary" />
    </button>
  );
}
