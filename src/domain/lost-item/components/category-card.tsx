import type { Slots } from '@/shared/types/slots';

interface CategoryCardProps {
  slots: Slots<'icon'>;
  cateogry: string;
  onClick: () => void;
}

export default function CategoryCard({ slots, cateogry, onClick }: CategoryCardProps) {
  return (
    <div
      data-cid="div-vtDc2p"
      className="cursor-pointer flex w-full flex-col items-center justify-center rounded-2xl py-4 shadow-lg"
      onClick={onClick}
    >
      {slots.icon && slots.icon()}
      <p
        data-cid="p-XSlzd9"
        className="mt-2 text-base text-foreground"
      >
        {cateogry}
      </p>
    </div>
  );
}
