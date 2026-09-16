/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tennis: {
          green: '#276B0B',
          deep: '#276B0B',
          black: '#050505',
          graphite: '#151515',
          darkgray: '#1c1c1c',
          offwhite: '#F5F5F0',
          white: '#FFFFFF',
          silver: '#B9B9B9',
          border: 'rgba(255, 255, 255, 0.1)',
          'green-glow': 'rgba(39, 107, 11, 0.25)',
        }
      },
      fontFamily: {
        display: ['"Barlow Condensed"', '"Bebas Neue"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        headline: ['"Syne"', '"Barlow Condensed"', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.2em',
        court: '0.25em',
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
