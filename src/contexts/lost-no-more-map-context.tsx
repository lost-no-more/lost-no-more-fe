'use client';

import { buildContext } from '@/lib/build-context';
import { useState } from 'react';

type LostNoMoreMapContextType = {
  center: { lat: number; lng: number };
  setCenter: React.Dispatch<React.SetStateAction<{ lat: number; lng: number }>>;
  level: number;
  setLevel: React.Dispatch<React.SetStateAction<number>>;
};

const [_LostNoMoreMapProvider, useLostNoMoreMapContext] = buildContext<LostNoMoreMapContextType>(
  'LostNoMoreMap',
  {
    center: { lat: 37.5665, lng: 126.978 },
    setCenter: () => {},
    level: 3,
    setLevel: () => {},
  }
);

const LostNoMoreMapProvider = ({ children }: { children: React.ReactNode }) => {
  const [center, setCenter] = useState({ lat: 37.5665, lng: 126.978 });
  const [level, setLevel] = useState(3);

  return (
    <_LostNoMoreMapProvider center={center} setCenter={setCenter} level={level} setLevel={setLevel}>
      {children}
    </_LostNoMoreMapProvider>
  );
};

export { LostNoMoreMapProvider, useLostNoMoreMapContext };
