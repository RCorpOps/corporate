module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm:'480px',
      md: '768px',
      lg:'1000px',
      xl: '1200px',
    },
    container: {
      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1072px',
        '2xl': '1072px',
      },
    },
    extend: {
      height:{
        '150' : "600px"
      },
      colors:{
        grey:"#74727a",
        orange:"#ffa065",
        black:"#2a2833",
        "dark-white":"#efefef",
        yellowish:"#fefbf4",
        pink:"#ff4eb5",
        "white-pink":"#fff9ff",
        "white-yellow":"#fefbf4",
        "dark-blue":"#18212e"
      },
    },
  },
  plugins: [],
}
