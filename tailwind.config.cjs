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
        placeHolder:'#aeaeae',
        bgCard:'#fafafa'
      },
      screens:
      {
        'noImgHero':{'max':'1310px'},
        'topText':{'max':'1346px'},
        'mobNav':{'max':'1249px'},
        'mob':{'max':'1080px'},
        'phone':{'max':'500px'},
        'elige':{'max':'745px'},
        'nuestro':{'max':'1396px'},
        'gridPurple':{'max':'1051px'},
        'previewMob':{'max':'871px'},
        'previewMob':{'max':'871px'},
        '1221px':{'max':'1221px'},
        'heroProduct':{'max':'849px'},
        'product':{'max':'1168px'},
        '826px':{'max':'826px'},
        '926px':{'max':'926px'},
        'question1':{'max':'1231px'},
        'question2':{'max':'1200px'},
        'question3':{'max':'1168px'},
        'question4':{'max':'1134px'},
        'question5':{'max':'1079px'},
        'question6':{'max':'925px'},
        'question7':{'max':'435px'},
        'question8':{'max':'413px'},
        'signUp':{'max':'1179px'},

      }
    },
  },
  plugins: [],
}