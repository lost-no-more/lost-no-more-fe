'use client';

import { useMapPanelContext } from '@/contexts/map-panel-context';
import MapDetailPanel from './map-detail-panel';
import MapPanel from './map-panel';

export default function MapPanelSwitch() {
  const { isPanelOpen } = useMapPanelContext();

  return isPanelOpen ? <MapDetailPanel /> : <MapPanel />;
}
