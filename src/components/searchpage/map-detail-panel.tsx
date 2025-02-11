import { LostLocation } from '@/types/lost-property';
import { Building2Icon, CalendarIcon, ChevronLeftIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import Image from 'next/image';

interface MapDetailPanelProps {
  name: string;
  image: string;
  acquisitionLocation: LostLocation;
  acquisitionDate: string;
  storageLocation: string;
  contact: string;
  description: string;
}

export default function MapDetailPanel({
  name,
  image,
  acquisitionLocation,
  acquisitionDate,
  storageLocation,
  contact,
  description,
}: MapDetailPanelProps) {
  return (
    <div className="flex w-[540px] flex-col gap-3 bg-background">
      <div className="flex w-full items-center gap-4 p-5 pb-0">
        <button>
          <ChevronLeftIcon size={24} color="hsl(var(--foreground))" />
        </button>
        <p className="text-2xl font-extrabold">{name}</p>
      </div>
      <div className="flex h-full w-full flex-col gap-3 overflow-y-auto pb-5 pl-5 pr-3.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar]:w-1.5">
        <div className="relative h-[285px] w-[500px] shrink-0">
          <Image className="rounded-xl object-cover" src={image} fill alt={name} />
        </div>
        <div className="flex flex-col gap-1 rounded-xl border-2 border-solid border-border bg-background p-3">
          <p className="text-lg font-bold">습득물 정보</p>
          <div className="flex items-center gap-2">
            <MapPinIcon size={18} color="hsl(var(--foreground))" />
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold">습득 장소</p>
              <p className="text-base">{acquisitionLocation}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon size={18} color="hsl(var(--foreground))" />
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold">습득 일자</p>
              <p className="text-base">{acquisitionDate}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Building2Icon size={18} color="hsl(var(--foreground))" />
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold">보관 장소</p>
              <p className="text-base">{storageLocation}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon size={18} color="hsl(var(--foreground))" />
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold">연락처</p>
              <p className="text-base">{contact}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 rounded-xl border-2 border-solid border-border bg-background p-3">
          <p className="text-lg font-bold">습득물 설명</p>
          <p className="text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}
