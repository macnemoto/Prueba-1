/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {     
      keyframes: {
        imgPokemon: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      dropShadow: {
        '3xl': '0px 13px 28px rgba(0,0,0,0.1)'
      }
    },
  },
  plugins: [],
}