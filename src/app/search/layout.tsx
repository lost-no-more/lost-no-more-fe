import type { Metadata } from 'next';
import '@/styles/globals.css';
import RootLayout from '@/app/layout';

export const metadata: Metadata = {
  title: '잃.없.다에서 분실물을 검색해보세요!',
  description:
    '잃.없.다에서 분실물을 검색해보세요. 지역과 카테고리를 선택하여 분실물을 검색해보세요.',
  openGraph: {
    title: '잃.없.다에서 분실물을 검색해보세요!',
    description:
      '잃.없.다에서 분실물을 검색해보세요. 지역과 카테고리를 선택하여 분실물을 검색해보세요.',
  },
};

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayout>{children}</RootLayout>;
}
