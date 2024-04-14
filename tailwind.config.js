/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tomato: 'hsl(4, 100%, 67%)',
        lightTomato: 'hsl(4,100%, 67%, .4)',
        darkSlateGrey: 'hsl(234, 29%, 20%)',
        charcoalGrey: 'hsl(235, 18%, 26%)',
        grey: 'hsl(231, 7%, 60%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        roboto: 'Roboto, sans-serif'
      },
      boxShadow: {
        shadowCustom: '10px 10px 17px 0px hsl(4, 100%, 67%)',
      },
      screens: {
        'sm': {'max': '768px'},
      },
    },
  },
  plugins: [],
}

