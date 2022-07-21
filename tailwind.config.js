/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: [],
  // mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  content: [
    `assets/styles/*.{scss}`,
    `assets/styles/**/*.{scss}`,
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `pages/*.vue`,
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
        darkpurple: '#1D2D40',
        skydarker: '#003543',
      }
    },
    /*container: {
      center: true,
      padding: '14px',
      screens: {
         sm: "100%",
         md: "100%",
         lg: "1024px",
         xl: "1280px"
      }
    },*/
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
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addUtilities, addComponents, e, config, theme }) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '14px',
          paddingRight: '14px',
          '@screen sm': {
            maxWidth: '1240px',
          },
          /*'@screen md': {
            maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '100%',
          },
          '@screen xl': {
            maxWidth: '100%',
          },
          '@screen 2xl': {
            maxWidth: '100%',
          },*/
        },
        '.btn': {
          'display': 'inline-flex',
          'align-items': 'center',
          'justify-content': 'center',
          'border-radius': '0.375rem',
          'color': '#fff',
          'font-weight': '500',
          'padding-top': '0.75rem',
          'padding-bottom': '0.75rem',
          'padding-left': '2.25rem',
          'padding-right': '2.25rem',
          'transition': 'background-color 300ms ease',
        },
        '.btn-primary': {
          'background-color': theme('colors.primary'),
          '&:hover': {
            'background-color': theme('colors.lightgreen'),
          },
        }
      })
      addUtilities({
        '.min-h-fill-available': {
          'min-height': '-webkit-fill-available',
        },
        '.h-header': {
          'height': '3.5rem',
        },
        '.d-aside-header-bg': {
          'background-color': 'rgba(1, 42, 53, 1)',
        },
      })
    }
  ],
}
