'use client';
import { Map, Circle, MapMarker } from 'react-kakao-maps-sdk';
import MoveMyPosButton from './move-mypos-button';
import { useLostNoMoreMapContext } from '@/contexts/lost-no-more-map-context';
import { useMemo, useRef, useCallback, useState } from 'react';
import { debounce } from 'lodash';
import ZoomController from './zoom-controller';
import { LOSTITEMS_LOCATION } from '@/constants/lost-items';

const MAP_REFRESH_DELAY = 500;

export default function LostNoMoreMap() {
  const { center, setCenter, level } = useLostNoMoreMapContext();
  const mapRef = useRef<kakao.maps.Map>(null);

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

  const getVisibleItems = useCallback(() => {
    if (!mapRef.current) return [];

    const bounds = mapRef.current.getBounds();
    const sw = bounds.getSouthWest();
    const ne = bounds.getNorthEast();

    console.log(sw.getLat(), ne.getLat(), sw.getLng(), ne.getLng());
    console.log(LOSTITEMS_LOCATION[0]);
    const visibleItems = LOSTITEMS_LOCATION.filter(
      (item) =>
        item.latitude >= sw.getLat() &&
        item.latitude <= ne.getLat() &&
        item.longitude >= sw.getLng() &&
        item.longitude <= ne.getLng()
    );
    console.log(visibleItems);

    return visibleItems;
  }, []);

  const [visibleItems, setVisibleItems] = useState<typeof LOSTITEMS_LOCATION>([]);

  const handleBoundsChanged = useMemo(
    () =>
      debounce(() => {
        setVisibleItems(getVisibleItems());
      }, MAP_REFRESH_DELAY),
    [getVisibleItems]
  );

  return (
    <Map
      center={center}
      level={level}
      isPanto={true}
      zoomable={false}
      onCenterChanged={handleCenterChanged}
      onBoundsChanged={handleBoundsChanged}
      onCreate={(map) => (mapRef.current = map)}
      className="relative h-full w-full"
    >
      {visibleItems.map((item, index) => (
        <MapMarker key={index} position={{ lat: item.latitude, lng: item.longitude }} />
      ))}
      <div className="absolute bottom-10 left-10 z-10 flex items-center gap-2">
        <MoveMyPosButton />
        <ZoomController />
      </div>
    </Map>
  );
}
