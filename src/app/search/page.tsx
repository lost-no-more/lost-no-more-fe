import Headerbar from '@/components/common/headerbar';
import LostNoMoreMap from '@/components/searchpage/lost-no-more-map';
import MapPanelSwitch from '@/components/searchpage/map-panel-switch';
import { LostNoMoreMapProvider } from '@/contexts/lost-no-more-map-context';
import { MapPanelProvider } from '@/contexts/map-panel-context';

export default function SearchPage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Headerbar />
      <div className="flex h-0 flex-1">
        <MapPanelProvider>
          <MapPanelSwitch />
        </MapPanelProvider>
        <LostNoMoreMapProvider>
          <LostNoMoreMap />
        </LostNoMoreMapProvider>
      </div>
    </div>
  );
}
