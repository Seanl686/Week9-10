/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#61dafb',
          DEFAULT: '#00c6ff',
          dark: '#0072ff',
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['monospace'],
      },
    },
  },
  plugins: [],
}
