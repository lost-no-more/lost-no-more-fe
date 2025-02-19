import { getItemsCount } from '../queries/getItemsCount';

export default async function CountCards() {
  const data = await getItemsCount();
  return (
    <div
      data-cid="div-691SVA"
      className="flex justify-between gap-24"
    >
      <div
        data-cid="div-wMCIBK"
        className="flex w-full flex-col items-center justify-center rounded-2xl py-4 shadow-lg"
      >
        <p
          data-cid="p-WJ9ETQ"
          className="mb-2 text-4xl font-bold text-primary"
        >
          {data.data.today.toLocaleString()}
        </p>
        <p
          data-cid="p-B4pETk"
          className="text-base text-muted-foreground"
        >
          금일 등록 분실물
        </p>
      </div>

      <div
        data-cid="div-wMCIBK"
        className="flex w-full flex-col items-center justify-center rounded-2xl py-4 shadow-lg"
      >
        <p
          data-cid="p-WJ9ETQ"
          className="mb-2 text-4xl font-bold text-primary"
        >
          {data.data.total.toLocaleString()}
        </p>
        <p
          data-cid="p-B4pETk"
          className="text-base text-muted-foreground"
        >
          전체 등록 분실물
        </p>
      </div>
    </div>
  );
}
