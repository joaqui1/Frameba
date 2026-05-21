/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './foto-video-eventos-buenos-aires/**/*.html',
    './fotografo-15-anos-caba-gba/**/*.html',
    './fotografia-video-casamientos-buenos-aires/**/*.html',
    './eventos-corporativos-buenos-aires/**/*.html',
    './video-para-eventos-buenos-aires/**/*.html',
    './contacto/**/*.html',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        zinc: { 850: '#1F2025', 900: '#18181B', 950: '#09090B' },
        brand: { orange: '#FF4500', blue: '#2563EB' },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
      },
    },
  },
  plugins: [],
};
