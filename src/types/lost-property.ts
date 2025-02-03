export const LostLocations = [
  '서울특별시',
  '강원도',
  '경기도',
  '경상남도',
  '경상북도',
  '광주광역시',
  '대구광역시',
  '대전광역시',
  '부산광역시',
  '울산광역시',
  '인천광역시',
  '전라남도',
  '전라북도',
  '충청남도',
  '충청북도',
  '제주특별자치도',
  '세종특별자치시',
  '해외',
  '기타',
] as const;

export type LostLocation = (typeof LostLocations)[number];

export const LostCategories = [
  '가방',
  '귀금속',
  '도서용품',
  '무주물',
  '서류',
  '산업용품',
  '쇼핑백',
  '스포츠용품',
  '악기',
  '유가증권',
  '의류',
  '자동차',
  '전자기기',
  '지갑',
  '증명서',
  '컴퓨터',
  '카트',
  '현금',
  '휴대폰',
  '기타물품',
  '유류품',
] as const;

export type LostCategory = (typeof LostCategories)[number];
