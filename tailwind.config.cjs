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
        myBlack:'#232323',
        myOpacity:'#14063F',
        myGreen2:'#0BD2B7',
        placeHolder:'#aeaeae'
      },
      screens:
      {
        'noImgHero':{'max':'1310px'},
        'topText':{'max':'1346px'},
        'mobNav':{'max':'1167px'},
        'mob':{'max':'1080px'},
        'phone':{'max':'500px'},
        'elige':{'max':'745px'},
        'nuestro':{'max':'1396px'},
        'gridPurple':{'max':'1051px'}
      }
    },
  },
  plugins: [],
}