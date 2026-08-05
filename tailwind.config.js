/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#0B0F14',
        panel: '#11161D',
        paper: '#FAF9F6',
        graphite: '#8C96A3',
        amber: '#F5A524',
        ochre: '#9A6700',
        line: {
          DEFAULT: '#E7E3DA',
          dark: '#222B35',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace'],
      },
    },
  },
  plugins: [],
}
