/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#F0F4F8',
        tennis: {
          green: '#8DF000',
          deep: '#8DF000',
          black: '#050505',
          graphite: '#151515',
          darkgray: '#1c1c1c',
          offwhite: '#F0F4F8',
          white: '#F0F4F8',
          silver: '#B9B9B9',
          border: 'rgba(240, 244, 248, 0.1)',
          'green-glow': 'rgba(141, 240, 0, 0.25)',
        }
      },
      fontFamily: {
        display: ['"Outfit"', '"Montserrat"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        headline: ['"Montserrat"', '"Outfit"', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '0.01em',
        tight: '0.02em',
        wide: '0.06em',
        wider: '0.12em',
        widest: '0.22em',
        court: '0.28em',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'court-dash': 'dash 20s linear infinite',
      },
      keyframes: {
        dash: {
          to: {
            strokeDashoffset: '1000',
          },
        },
      },
    },
  },
  plugins: [],
}
