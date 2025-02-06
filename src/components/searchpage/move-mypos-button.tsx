import { NavigationIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLostNoMoreMapContext } from '@/contexts/lost-no-more-map-context';
import { useCallback } from 'react';

export default function MoveMyPosButton({ className }: { className?: string }) {
  const { setCenter } = useLostNoMoreMapContext();
  const handleClick = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCenter({ lat: latitude, lng: longitude });
    });
  }, [setCenter]);

  return (
    <button
      onClick={handleClick}
      className={cn(
        'border-1 group rounded-lg border-2 border-solid border-border bg-background p-2 hover:border-background hover:bg-foreground',
        className
      )}
    >
      <NavigationIcon size={24} className="text-foreground group-hover:text-background" />
    </button>
  );
}
