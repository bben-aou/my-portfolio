/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: {
          900: '#FBFBFB',
          800: '#DFDFDF',
        },
        dark: {
          900: '#263138',
          800: '#445964',
          700: '#00829b',
          600: '#445964b0',
          500: '#3F4756',
          400: '#1e293b'
        },
        btn:{
          900 : '#3E2938',
          800 : '#414B59',
          700: '#675E7D'
        },
        darkTheme: {
          900 : '#141C29'
        }
      },
      fontFamily: {
        'roboto' : ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'quote': ["'Indie Flower'", 'cursive'],

      },
      boxShadow: {
        'profile': ' 0 0 0 7px rgb(255, 255, 225 );',
      }
      
    },
    // screens: {
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   '2xl': '1536px',
    // },
  },
  plugins: [require("daisyui")],

}

