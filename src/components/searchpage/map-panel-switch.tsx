'use client';

import { useMapPanelContext } from '@/contexts/map-panel-context';
import { motion } from 'motion/react';
import MapDetailPanel from './map-detail-panel';
import MapPanel from './map-panel';

export default function MapPanelSwitch() {
  const { isPanelOpen } = useMapPanelContext();

  return (
    <motion.div
      animate={{ width: isPanelOpen ? 540 : 314 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {isPanelOpen ? <MapDetailPanel /> : <MapPanel />}
    </motion.div>
  );
}
