/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'primary':'#E08836',
      'primaryLighten':'#FFFDF4',
      'TextColor':'#252422',
      'TextColorSec':'#403d39',
      'backPri':'#ffffff',
      'backSec':'#FFFDF4'
    },
    fontFamily: {
      'rubik': ['Rubik', 'sans-serif'],
      'outfit': ['Outfit', "sans-serif"],
      'pacifico': ['Pacifico', 'sans-serif'],
      'kanit': ['Kanit', 'sans-serif'],
    },
  },
  plugins: [],
}