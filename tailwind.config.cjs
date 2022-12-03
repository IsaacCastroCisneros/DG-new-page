/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        myGreen:'#00FF84',
        myPurple:'#6440FB',
        myPurpleBg:'#140342',
        myGrey:'#F5F5F5',
        myRed:'#CC214F',
        myBlack:'#232323' 
      },
    },
  },
  plugins: [],
}