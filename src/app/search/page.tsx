import Headerbar from '@/components/common/headerbar';
import LostNoMoreMap from '@/components/searchpage/lost-no-more-map';
import MapPanel from '@/components/searchpage/map-panel';
import { LostNoMoreMapProvider } from '@/contexts/lost-no-more-map-context';

export default function SearchPage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Headerbar />
      <div className="flex h-0 flex-1">
        <MapPanel />
        <LostNoMoreMapProvider>
          <LostNoMoreMap />
        </LostNoMoreMapProvider>
      </div>
    </div>
  );
}
