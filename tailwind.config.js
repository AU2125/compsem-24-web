/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto': ["Noto Sans Display", "sans-serif"],
        'pt': ["PT Sans Caption", "sans-serif"],
        'alegraya': ["Alegreya Sans", "sans-serif"],
        'didact': ["Didact Gothic", "sans-serif"],
        'maven': ["Maven Pro", "sans-serif"],
        'exo' : ["Exo 2", "sans-serif"],
        'barlow': ["Barlow Condensed", "sans-serif"],
        'kdam': ["Kdam Thmor Pro", "sans-serif"],
        'josefin': ["Josefin Sans", "sans-serif"],
        'anta': ["Anta", "sans-serif"]
      },
      animation: {
        'clip-text-from-below': 'clip-polygon 600ms ease-in-out',
        'clip-text-from-above': 'clip-polygon-reverse 600ms ease-in-out',
      },
      keyframes: {
        'clip-polygon': {
          '0%': {
            'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
          },
          '50%': {
            'clip-path': 'polygon(0 60%, 100% 60%, 100% 100%, 0% 100%)',
          },
          '100%': {
            'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
          }
        },
        'clip-polygon-reverse': {
          '0%': {
            'clip-path':'polygon(0 0, 100% 0, 100% 0, 0 0)'
          },
          '100%': {
            'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          }
        }
      }
    },
  },
  plugins: [],
}

