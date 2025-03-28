/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        acido: '#ffd801', // Acido
        caverna: '#394144', // Caverna
        third: '#003459', // Prussian blue
        fourth: '#FFFFFF', // White
        fifth: '#00171F', // Rich black
      },
    },
  },
  plugins: [],
}

