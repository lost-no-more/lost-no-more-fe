'use client';
import { Map } from 'react-kakao-maps-sdk';
import MoveMyPosButton from './move-mypos-button';
import { useLostNoMoreMapContext } from '@/contexts/lost-no-more-map-context';
import { useMemo } from 'react';
import { debounce } from 'lodash';
import ZoomController from './zoom-controller';

const MAP_REFRESH_DELAY = 500;

export default function LostNoMoreMap() {
  const { center, setCenter, level } = useLostNoMoreMapContext();
  const handleCenterChanged = useMemo(
    () =>
      debounce((map: kakao.maps.Map) => {
        setCenter({
          lat: map.getCenter().getLat(),
          lng: map.getCenter().getLng(),
        });
      }, MAP_REFRESH_DELAY),
    [setCenter]
  );

  return (
    <Map
      center={center}
      level={level}
      isPanto={true}
      zoomable={false}
      onCenterChanged={handleCenterChanged}
      className="relative h-full w-full"
    >
      <div className="absolute bottom-10 left-10 z-10 flex items-center gap-2">
        <MoveMyPosButton />
        <ZoomController />
      </div>
    </Map>
  );
}
