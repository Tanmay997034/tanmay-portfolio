/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#05050A',
        surface: 'rgba(255, 255, 255, 0.03)',
        surfaceBorder: 'rgba(255, 255, 255, 0.08)',
        primary: '#8B5CF6',
        secondary: '#3B82F6',
        accent: '#D946EF',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #8B5CF633 0deg, #3B82F633 180deg, #8B5CF633 360deg)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}