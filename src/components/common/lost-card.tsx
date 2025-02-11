import Image from 'next/image';

export interface LostCardProps {
  name: string;
  image: string;
  category: string;
  location: string;
  acquisitionDate: string;
  onClick?: () => void;
}

export default function LostCard({
  name,
  image,
  category,
  location,
  acquisitionDate,
  onClick,
}: LostCardProps) {
  return (
    <div
      className="relative box-border flex w-[274px] shrink-0 cursor-pointer flex-col overflow-hidden rounded-xl border-2 border-solid border-border"
      onClick={onClick}
    >
      <div className="absolute right-3 top-3 z-10 rounded-md bg-primary px-2.5 py-1.5 text-xs font-semibold text-background">
        {category}
      </div>
      <div
        data-cid="div-7cMEXT"
        className="relative h-[165px] w-[270px]"
      >
        <Image
          data-cid="Image-5lTzOJ"
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex w-full flex-col border-t-2 border-solid border-border bg-background p-3">
        <h1 className="mb-3 truncate text-2xl font-extrabold text-foreground">{name}</h1>
        <div className="mb-1 flex items-center gap-2">
          <MapPinIcon size={16} color="hsl(var(--muted-foreground))" />
          <p className="truncate text-base text-muted-foreground">{location}</p>
        </div>
        <div className="flex items-center gap-2">
          <Clock10Icon size={16} color="hsl(var(--muted-foreground))" />
          <p className="truncate text-base text-muted-foreground">습득일자: {acquisitionDate}</p>
        </div>
      </div>
    </div>
  );
}
