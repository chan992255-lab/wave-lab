export type Package = {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  delivery: string;
  summary: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
};

export const packages: Package[] = [
  {
    id: 'light',
    name: '라이트 랜딩 페이지',
    price: '50,000',
    priceNote: '원~',
    delivery: '1~2일',
    summary: '매장·브랜드 소개가 필요한 곳에 딱 맞는 원페이지.',
    features: [
      '매장 소개 · 메뉴판 · 오시는 길',
      '문의 · 카톡 채널 연결',
      '모바일 최적화',
      '무료 호스팅 세팅',
    ],
  },
  {
    id: 'interactive',
    name: '인터랙티브 웹앱',
    price: '150,000',
    priceNote: '원~',
    delivery: '2~4일',
    summary: '방문자가 직접 눌러 보고 계산하는 웹앱형 페이지.',
    highlight: true,
    badge: '가장 많이 선택',
    features: [
      '라이트 패키지 포함 모든 기능',
      '예약 · 맞춤 계산기 · 폼 기능',
      '홈 화면에 설치(PWA) 지원',
      '관리자용 간단 데이터 저장',
    ],
  },
  {
    id: 'fullstack',
    name: '회원제 · 실시간 DB',
    price: '300,000',
    priceNote: '원~',
    delivery: '3~7일',
    summary: '로그인과 실시간 데이터가 필요한 서비스용 풀스택 구성.',
    features: [
      '인터랙티브 패키지 포함 모든 기능',
      '로그인 · 회원/관리자 모드 분리',
      '실시간 DB 연동 (Supabase)',
      '권한 · 보안 정책 설정',
    ],
  },
];

export const packageNotes = [
  '초기 포트폴리오 확장 특가로 진행 중입니다. (정가 대비 낮은 금액)',
  '모든 패키지에 무료 배포 세팅이 포함됩니다.',
  '원하시면 보유 중인 도메인 연결도 지원합니다.',
];
