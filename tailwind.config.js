module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'body': '#17171F',
        'selected-text': '#FF6D00',
        'theme': '#FF5400',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35',
        'gradientOra1': '#FF5400',
        'gradientOra2': '#FF9E00',
        'sub-color' : '#9D4EDD'
        
      }
    },
    fontFamily: {
      Poppins: ['poppins, sans-serif'],
      Roboto: ['roboto, times-new-roman']

    },
    container: {
      center: true,
      padding: "1rem",
    }
  },
  plugins: [],
}