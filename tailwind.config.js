/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
        },
      },
      fontFamily: {
        'roboto' : ['Roboto', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
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

