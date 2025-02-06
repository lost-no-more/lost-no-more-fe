import Headerbar from '@/components/common/headerbar';
import LostNoMoreMap from '@/components/searchpage/lost-no-more-map';
import { LostNoMoreMapProvider } from '@/contexts/lost-no-more-map-context';

export default function SearchPage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Headerbar />
      <LostNoMoreMapProvider>
        <LostNoMoreMap />
      </LostNoMoreMapProvider>
    </div>
  );
}
