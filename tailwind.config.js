/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
          section1bg:"url('./images/1st page/Rectangle 397.png')",
          page2header:"url('./images/dreamteam/Rectangle 397.png')",
          abouthero:"url('./images/abouthero.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
          aboutsec2:"url('./images/aboutsection2.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
          aboutsec3:"url('./images/Rectangle476.png')",
          philosphyhero:"url('./images/philophy/philophyherobg.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
          philosphymovingfast:"url('./images/philophy/Frame48100300.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
          philosphysec:"url('./images/philophy/Rectangle453.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
          philosphysec1:"url('./images/philophy/Rectangle449.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
          resorcebg:"url('./images/resourse/resorsebg2.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
          carearebg2:"url('./images/careare/carearebg.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))",
          katabg:"url('./images/kata/katabg.png'),linear-gradient(360deg, rgba(14, 35, 51, 1), rgba(14, 35, 51, 1))"
    },
    fontFamily:{
      popins:"'Poppins', sans-serif",
    },

    colors:{
      primary:"#0E2333",
      frozi:"#3BD39D",
      griy:"#666460;"
   
    },
 
  },
  plugins: [],
}
}
