/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter','sans-serif'],
        
      },
      colors: {
        rocketseat: '#8257e6' // CRIANDO CORES CUSTOMIZADAS
      }
    },
  },
  plugins: [],
}

