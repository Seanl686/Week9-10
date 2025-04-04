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
        sans: ['Ubuntu', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        garamond: ['EB Garamond', 'Garamond', 'serif'],
        mono: ['monospace'],
      },
      fontSize: {
        'heading': ['4.2em', {
          lineHeight: '1.1',
          fontWeight: '600',
        }],
        'subheading': ['3em', {
          lineHeight: '1.2',
          fontWeight: '500',
        }],
      },
      backgroundColor: {
        'app': '#242424',
      },
      textColor: {
        'app': 'rgba(255, 255, 255, 0.87)',
      },
      backgroundImage: {
        'app-gradient': 'linear-gradient(to top, #ffffff 0%, #242424 70%, #242424 100%, #ffffff 100%)',
      },
      minWidth: {
        'app': '200px',
      },
      maxWidth: {
        'app': '100%',
      },
    },
  },
  plugins: [],
}
