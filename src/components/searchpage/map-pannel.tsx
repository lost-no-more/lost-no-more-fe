import LostCard from '../common/lost-card';

export default function MapPannel() {
  return (
    <div className="flex h-full flex-col bg-background">
      <p className="shrink-0 py-3.5 text-center text-base font-extrabold text-foreground">
        분실물 목록
      </p>
      <div
        style={{ scrollbarGutter: 'stable' }}
        className="flex flex-col gap-4 overflow-y-auto border-t border-solid border-border px-5 py-3 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-muted [&::-webkit-scrollbar]:w-1.5"
      >
        {Array.from({ length: 1000 }, (_, index) => (
          <LostCard
            key={index}
            name={`습득물 ${index + 1}`}
            image={'https://sitem.ssgcdn.com/26/64/85/item/1000277856426_i1_750.jpg'}
            category={'기타'}
            location={'대한민국 내 어딘가'}
            acquisitionDate={'2025-01-06'}
          />
        ))}
      </div>
    </div>
  );
}
