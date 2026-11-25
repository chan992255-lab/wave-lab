/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Pretendard',
          'Pretendard Variable',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Apple SD Gothic Neo',
          'Malgun Gothic',
          'sans-serif',
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        bg: '#0A0A0F',
        surf: '#13131A',
        raised: '#191922',
        line: 'rgba(255,255,255,0.08)',
        ink: '#F4F4F8',
        sub: '#9AA0B4',
        indigo: '#6366F1',
        iris: '#818CF8',
        blue: '#3B82F6',
        sky: '#60A5FA',
        emerald: '#10B981',
        mint: '#34D399',
      },
      boxShadow: {
        card: '0 24px 60px -32px rgba(0,0,0,0.9)',
        lift: '0 32px 80px -36px rgba(99,102,241,0.55)',
        glow: '0 0 60px -18px rgba(99,102,241,0.6)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(0,-18px,0) scale(1.04)' },
        },
        sweep: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(0.45)' },
          '50%': { transform: 'scaleY(1)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 500ms ease-out both',
        drift: 'drift 12s ease-in-out infinite',
        sweep: 'sweep 3.6s ease-in-out infinite',
        wave: 'wave 1.4s ease-in-out infinite',
        marquee: 'marquee 26s linear infinite',
      },
    },
  },
  plugins: [],
};
