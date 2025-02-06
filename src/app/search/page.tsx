import Headerbar from '@/components/common/headerbar';
import LostNoMoreMap from '@/components/searchpage/lost-no-more-map';

export default function SearchPage() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Headerbar />
      <LostNoMoreMap />
    </div>
  );
}
