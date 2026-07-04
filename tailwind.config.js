/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#020617',
        nebula: '#7c3aed',
        aurora: '#14b8a6',
        stardust: '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(20, 184, 166, 0.35)',
      },
    },
  },
  plugins: [],
}
