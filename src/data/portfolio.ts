export type ProjectKind = 'chart' | 'chat' | 'plan' | 'map' | 'timer' | 'sound';

export type Project = {
  nameKo: string;
  nameEn: string;
  category: string;
  summary: string;
  features: string[];
  tags: string[];
  url: string;
  kind: ProjectKind;
  accent: { from: string; to: string; chip: string };
};

export const projects: Project[] = [
  {
    nameKo: '스톡업',
    nameEn: 'StockUp',
    category: '금융 · 모의투자',
    summary: '실시간 시세와 차트, 계산기, 게임까지 담은 모의투자 웹앱.',
    features: ['실시간 차트 UI와 종목 상세', '물타기 · 수익률 계산기', '20일 봉차트 · 30초 단타 게임'],
    tags: ['차트 UI', '계산 로직', 'localStorage', 'PWA'],
    url: 'https://stock-up-one.vercel.app',
    kind: 'chart',
    accent: { from: '#3B82F6', to: '#6366F1', chip: 'text-sky-300' },
  },
  {
    nameKo: '라이어픽',
    nameEn: 'LiarPick',
    category: '실시간 멀티플레이어',
    summary: '로그인하고 방 코드로 모여 실시간으로 즐기는 파티 게임.',
    features: ['회원가입 · 로그인', '실시간 온라인 매칭 · 방 코드 · 채팅', '오프라인 진행용 파티 게임 모드'],
    tags: ['Supabase Realtime', 'RLS 보안', '방 상태 동기화', '게임 엔진'],
    url: 'https://liar-pick.vercel.app',
    kind: 'chat',
    accent: { from: '#8B5CF6', to: '#6366F1', chip: 'text-violet-300' },
  },
  {
    nameKo: '세트업',
    nameEn: 'SetUp',
    category: '피트니스 · PT샵 관리',
    summary: '회원과 트레이너가 각자의 화면으로 쓰는 헬스장 관리 웹앱.',
    features: ['회원 · 트레이너 역할 분리', '초대 코드로 연결', '맞춤 루틴 배정 · 1RM 계산기'],
    tags: ['역할 기반 UI', '초대 코드', '운동 기록', '모바일 우선'],
    url: 'https://setup-gym.vercel.app',
    kind: 'plan',
    accent: { from: '#10B981', to: '#0EA5E9', chip: 'text-emerald-300' },
  },
  {
    nameKo: '스쿨픽',
    nameEn: 'SchoolPick',
    category: '지도 · 커뮤니티',
    summary: '전국 학교를 지도에서 찾고 급식표와 소식을 보는 커뮤니티 플랫폼.',
    features: ['전국 2,679개 학교 지도 탐색', '공공 API 연동 급식표', '학교별 커뮤니티'],
    tags: ['지도 API', '공공데이터 API', '검색 최적화', '커뮤니티'],
    url: 'https://school-pick-phi.vercel.app',
    kind: 'map',
    accent: { from: '#F59E0B', to: '#EF4444', chip: 'text-amber-300' },
  },
  {
    nameKo: '스터디픽',
    nameEn: 'StudyPick',
    category: '생산성 · 학습 트래커',
    summary: '집중 타이머로 공부 시간을 기록하고 과목별 통계를 보는 학습 앱.',
    features: ['회원 로그인 · 개인 기록 저장', '집중 타이머', '과목별 학습 통계'],
    tags: ['인증', '타이머', '통계 시각화', '데이터 영속화'],
    url: 'https://study-pick.vercel.app',
    kind: 'timer',
    accent: { from: '#0EA5E9', to: '#22D3EE', chip: 'text-cyan-300' },
  },
  {
    nameKo: '싱픽',
    nameEn: 'SingPick',
    category: '음악 · 인터랙티브',
    summary: '노래를 고르고, 녹음하고, 점수표로 확인하는 노래방 웹앱.',
    features: ['인기 차트 · 곡 검색', '녹음 · 가사 인터랙션', '100점 점수표 · 반주 재생'],
    tags: ['Web Audio', '차트 UI', '인터랙션', '모바일 마이크'],
    url: 'https://sing-pick.vercel.app',
    kind: 'sound',
    accent: { from: '#EC4899', to: '#F59E0B', chip: 'text-pink-300' },
  },
];
