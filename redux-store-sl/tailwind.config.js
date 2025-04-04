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
        link: {
          DEFAULT: '#646cff',
          hover: '#535bf2',
        },
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['monospace'],
      },
      fontSize: {
        'heading': ['3.2em', {
          lineHeight: '1.1',
          fontWeight: '600',
        }],
      },
      backgroundColor: {
        'app': '#242424',
      },
      textColor: {
        'app': 'rgba(255, 255, 255, 0.87)',
      },
    },
  },
  plugins: [],
}
