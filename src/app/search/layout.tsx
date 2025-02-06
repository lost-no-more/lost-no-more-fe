import type { Metadata } from 'next';
import '@/styles/globals.css';
import RootLayout from '@/app/layout';
import Script from 'next/script';

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
  return (
    <RootLayout>
      <Script
        type="text/javascript"
        strategy="beforeInteractive"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=4c94c5b2b00b891ab0cba39babe41050&libraries=clusterer,drawing&autoload=false"
      />
      {children}
    </RootLayout>
  );
}
