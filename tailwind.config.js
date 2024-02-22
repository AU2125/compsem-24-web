/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'clip-text-from-below': 'clip-polygon 350ms ease-in',
        'clip-text-from-above': 'clip-polygon-reverse 500ms ease-in',
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

