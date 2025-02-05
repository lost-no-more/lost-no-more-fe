import { Slots } from '@/types/slots';

interface CategoryCardProps {
  slots: Slots<'icon'>;
  cateogry: string;
}

export default function CategoryCard({ slots, cateogry }: CategoryCardProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center py-4 shadow-lg">
      {slots.icon && slots.icon()}
      <p className="mt-2 text-base text-foreground">{cateogry}</p>
    </div>
  );
}
