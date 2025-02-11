'use client';
import { useMapPanelContext } from '@/contexts/map-panel-context';
import useBoolean from '@/hooks/useBoolean';
import { LostLocation } from '@/types/lost-property';
import { Building2Icon, CalendarIcon, ChevronLeftIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import SkeletonView from '../common/skeleton-view';

interface MapDetailPanelProps {
  name: string;
  image: string;
  acquisitionLocation: LostLocation;
  acquisitionDate: string;
  storageLocation: string;
  contact: string;
  description: string;
}

export default function MapDetailPanel() {
  const { value: isLoading, setFalse: completeLoad } = useBoolean(true);
  const { currentItemId } = useMapPanelContext();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [acquisitionLocation, setAcquisitionLocation] = useState<LostLocation | null>(null);
  const [acquisitionDate, setAcquisitionDate] = useState('');
  const [storageLocation, setStorageLocation] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');

  const fetchLostItem = useCallback(async (id: number) => {
    return new Promise<MapDetailPanelProps>((resolve) => {
      setTimeout(() => {
        resolve({
          name: `분실물 ${id}`,
          image: 'https://sitem.ssgcdn.com/26/64/85/item/1000277856426_i1_750.jpg',
          acquisitionLocation: '경기도',
          acquisitionDate: '2020-01-01',
          storageLocation: '경기도청',
          contact: '02-1234-1234',
          description:
            '경기도청 2층 민원실에서 보관중입니다. 평일 9시부터 6시까지 방문 가능합니다. 본인임을 확인할 수 있는 서류를 지참해주세요.',
        });
      }, 500);
    });
  }, []);

  useEffect(() => {
    fetchLostItem(currentItemId).then((lostItem) => {
      setName(lostItem.name);
      setImage(lostItem.image);
      setAcquisitionLocation(lostItem.acquisitionLocation);
      setAcquisitionDate(lostItem.acquisitionDate);
      setStorageLocation(lostItem.storageLocation);
      setContact(lostItem.contact);
      setDescription(lostItem.description);
      completeLoad();
    });
  }, [completeLoad, currentItemId, fetchLostItem]);

  return (
    <div className="flex w-[540px] shrink-0 flex-col gap-3 bg-background">
      <div className="flex items-center gap-4 p-5 pb-0">
        <button>
          <ChevronLeftIcon size={24} color="hsl(var(--foreground))" />
        </button>
        {isLoading ? (
          <SkeletonView width="100%" height="32px" />
        ) : (
          <p className="text-2xl font-extrabold">{name}</p>
        )}
      </div>
      <div
        className="h-full overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar]:w-1.5"
        style={{ scrollbarGutter: 'stable' }}
      >
        <div className="flex flex-col gap-3 p-5 pr-3.5 pt-0">
          {isLoading ? (
            <SkeletonView width="500px" height="285px" />
          ) : (
            <Image
              className="h-[285px] w-[500px] rounded-xl object-cover"
              src={image}
              alt={name}
              width={500}
              height={285}
              priority
            />
          )}
          <div className="flex flex-col gap-1 rounded-xl border-2 border-solid border-border bg-background p-3">
            <p className="text-lg font-bold">습득물 정보</p>
            <div className="flex items-center gap-2">
              <MapPinIcon size={18} color="hsl(var(--foreground))" />
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold">습득 장소</p>
                {isLoading ? (
                  <SkeletonView width="100%" height="24px" />
                ) : (
                  <p className="text-base">{acquisitionLocation}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon size={18} color="hsl(var(--foreground))" />
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold">습득 일자</p>
                {isLoading ? (
                  <SkeletonView width="100%" height="24px" />
                ) : (
                  <p className="text-base">{acquisitionDate}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Building2Icon size={18} color="hsl(var(--foreground))" />
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold">보관 장소</p>
                {isLoading ? (
                  <SkeletonView width="100%" height="24px" />
                ) : (
                  <p className="text-base">{storageLocation}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon size={18} color="hsl(var(--foreground))" />
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold">연락처</p>
                {isLoading ? (
                  <SkeletonView width="100%" height="24px" />
                ) : (
                  <p className="text-base">{contact}</p>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 rounded-xl border-2 border-solid border-border bg-background p-3">
            <p className="text-lg font-bold">습득물 설명</p>
            {isLoading ? (
              <SkeletonView width="100%" height="24px" />
            ) : (
              <p className="text-base">{description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
