import { useLostNoMoreMapContext } from '@/contexts/lost-no-more-map-context';
import { ZoomInIcon, ZoomOutIcon } from 'lucide-react';

export default function ZoomController() {
  const { setLevel } = useLostNoMoreMapContext();
  const zoomIn = () => {
    setLevel((prev) => prev - 1);
  };

  const zoomOut = () => {
    setLevel((prev) => prev + 1);
  };

  return (
    <div className="flex items-center overflow-hidden rounded-lg border-2 border-solid border-border bg-background">
      <button className="group p-2 hover:bg-foreground" onClick={zoomIn}>
        <ZoomInIcon size={24} className="text-foreground group-hover:text-background" />
      </button>
      <button className="group p-2 hover:bg-foreground" onClick={zoomOut}>
        <ZoomOutIcon size={24} className="text-foreground group-hover:text-background" />
      </button>
    </div>
  );
}
