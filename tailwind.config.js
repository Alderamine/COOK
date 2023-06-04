/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      filter: {
        'custom-filter': 'invert(99%) sepia(24%) saturate(168%) hue-rotate(154deg) brightness(118%) contrast(100%)',
        'custom-filter2': 'invert(68%) sepia(53%) saturate(1706%) hue-rotate(335deg) brightness(92%) contrast(90%)',
      },
    },
    colors: {
      'primary': '#E08836',
      'primaryLighten': '#FFFDF4',
      'TextColor': '#252422',
      'TextColorSec': '#403d39',
      'backPri': '#ffffff',
      'backSec': '#FFFDF4'
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