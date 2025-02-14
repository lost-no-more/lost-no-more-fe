import { Clock10Icon, MapPinIcon } from 'lucide-react';
import Image from 'next/image';
import clsx from 'clsx';

interface LostCardProps {
  name: string;
  image: string;
  category: string;
  location: string;
  acquisitionDate: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-[200px]',
  md: 'w-[240px]',
  lg: 'w-[270px]',
};

export default function LostCard({
  name,
  image,
  category,
  location,
  acquisitionDate,
  size = 'lg',
}: LostCardProps) {
  return (
    <div
      data-cid="div-IToeJf"
      className={clsx(
        'relative flex cursor-pointer flex-col overflow-hidden rounded-xl border-2 border-solid border-border',
        sizeClasses[size]
      )}
    >
      <div
        data-cid="div-u7rpA7"
        className="absolute right-3 top-3 rounded-md bg-foreground px-2.5 py-1.5 text-xs font-semibold text-background"
      >
        {category}
      </div>
      <div data-cid="div-7cMEXT" className={clsx('relative aspect-[16/9] w-full')}>
        <Image data-cid="Image-5lTzOJ" src={image} alt={name} fill className="object-cover" />
      </div>
      <div
        data-cid="div-tTENZd"
        className="flex flex-col border-t-2 border-solid border-border bg-background p-3"
      >
        <h1 data-cid="h1-A5kABB" className="mb-3 text-2xl font-extrabold text-foreground">
          {name}
        </h1>
        <div data-cid="div-LQMbVx" className="mb-1 flex items-center gap-2">
          <MapPinIcon data-cid="MapPinIcon-4tpp5K" size={16} color="hsl(var(--muted-foreground)" />
          <p data-cid="p-lzGfHB" className="text-base text-muted-foreground">
            {location}
          </p>
        </div>
        <div data-cid="div-mcDpw7" className="flex items-center gap-2">
          <Clock10Icon
            data-cid="Clock10Icon-QjnF6N"
            size={16}
            color="hsl(var(--muted-foreground)"
          />
          <p data-cid="p-KLFAFk" className="text-base text-muted-foreground">
            습득일자: {acquisitionDate}
          </p>
        </div>
      </div>
    </div>
  );
}
