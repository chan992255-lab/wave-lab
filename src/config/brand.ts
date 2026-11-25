/**
 * 브랜드 설정 한 곳.
 * 이름·표기를 바꿀 때 이 파일만 수정하면 사이트 전체에 반영된다.
 */
export const brand = {
  name: 'Wave Lab',
  nameKo: '웨이브 랩',
  /** 로고 옆에 붙는 짧은 역할 */
  role: '웹앱 제작 스튜디오',
  tagline: '기획부터 배포까지, 한 번에.',
  description:
    '소상공인·브랜드·헬스장·크리에이터·스타트업의 아이디어를 실제로 작동하는 웹앱으로 만듭니다.',
  url: 'https://wavelab-kr.vercel.app',
  year: 2026,
} as const;

export const nav = [
  { href: '#work', label: '포트폴리오' },
  { href: '#pricing', label: '제작 패키지' },
  { href: '#process', label: '진행 과정' },
  { href: '#inquiry', label: '문의하기' },
] as const;
