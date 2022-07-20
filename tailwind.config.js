/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    `assets/styles/*.{scss}`,
    `assets/styles/**/*.{scss}`,
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ],
  theme: {
    fontFamily: {
      'sans': ['\'Roboto\'', 'sans-serif'],
    },
    extend: {
      spacing: {
        '5px': '5px',
        '10px': '10px',
        '15px': '15px',
        '20px': '20px',
        '25px': '25px',
        '30px': '30px',
        '35px': '35px',
        '40px': '40px',
        '45px': '45px',
        '50px': '50px',
        '55px': '55px',
        '60px': '60px',
        '65px': '65px',
        '70px': '70px',
        '75px': '75px',
        '80px': '80px',
        '85px': '85px',
        '90px': '90px',
        '95px': '95px',
        '100px': '100px',
        '105px': '105px',
      },
      colors: {
        primary: '#00C675',
        secondary: '#001E26',
        skyblue: '#E5F9FF',
        lightgreen: '#00DC82',
        darkgreen: '#012A35',
        lightgrey: '#B2CCCC',
        darkpurple: '#1D2D40'
      }
    },
    container: {
      center: true,
      padding: '14px',
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1240px',
      // => @media (min-width: 1240px) { ... }
    }
  },
  plugins: [],
}
