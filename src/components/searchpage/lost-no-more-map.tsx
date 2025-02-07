'use client';
import { Map, MapMarker, MarkerClusterer } from 'react-kakao-maps-sdk';
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

    const visibleItems = LOSTITEMS_LOCATION.filter(
      (item) =>
        item.latitude >= sw.getLat() &&
        item.latitude <= ne.getLat() &&
        item.longitude >= sw.getLng() &&
        item.longitude <= ne.getLng()
    );

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

  // 단일 마커 클릭 핸들러
  const handleMarkerClick = (item: (typeof LOSTITEMS_LOCATION)[0]) => {
    console.log('클릭한 분실물 ID:', item.lostItemID);
  };

  // 클러스터 클릭 핸들러
  const handleClusterClick = (_target: kakao.maps.MarkerClusterer, cluster: kakao.maps.Cluster) => {
    const markers = cluster.getMarkers();
    const EPSILON = 0.0000001; // 허용 오차 범위

    // 위치 비교 함수
    const isSamePosition = (
      pos1: { lat: number; lng: number },
      pos2: { latitude: number; longitude: number }
    ) => {
      return (
        Math.abs(pos1.lat - pos2.latitude) < EPSILON &&
        Math.abs(pos1.lng - pos2.longitude) < EPSILON
      );
    };

    const lostItemIDs = markers
      .map((marker: any) => {
        const position = {
          lat: Number(marker.getPosition().getLat().toFixed(6)),
          lng: Number(marker.getPosition().getLng().toFixed(6)),
        };

        const matchingItem = visibleItems.find((item) => isSamePosition(position, item));

        return matchingItem?.lostItemID;
      })
      .filter((id): id is number => id !== undefined);

    console.log('클러스터 내 분실물 ID 목록:', lostItemIDs);
  };

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
      <MarkerClusterer gridSize={250} onClusterclick={handleClusterClick} disableClickZoom={true}>
        {visibleItems.map((item) => (
          <MapMarker
            key={item.lostItemID}
            position={{ lat: item.latitude, lng: item.longitude }}
            onClick={() => handleMarkerClick(item)}
          />
        ))}
      </MarkerClusterer>
      <div className="absolute bottom-10 left-10 z-10 flex items-center gap-2">
        <MoveMyPosButton />
        <ZoomController />
      </div>
    </Map>
  );
}
