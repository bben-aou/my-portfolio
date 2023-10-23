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
      
    },
  },
  plugins: [],
}

