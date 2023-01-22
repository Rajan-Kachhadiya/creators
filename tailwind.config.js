/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontSize: {
      base: ['16px', '24px'],
    },
    extend: {
      fontFamily: {
        'sans': ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'white': '#fff',
        'black': '#000',
        'gray': '#E6E6E6',
        'primary': '#3c3e41',
        'secondary': '#0000FE',
        'orange': '#B49487',
      },
      spacing: {
        '5': '5px',
        '10': '10px',
        '15': '15px',
        '20': '20px',
        '30': '30px',
        '40': '40px',
        '50': '50px',
        '60': '60px',
        '80': '80px',
        '100': '100px',
        '150': '150px',
      }
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1140px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1140px',
    },
  },

  plugins: [],
}