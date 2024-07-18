const { hover } = require('@testing-library/user-event/dist/hover');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        veryLightGrayishBlue:'hsl(240, 78%, 98%)',
        lightGrayishBlue: 'hsl(234, 14%, 74%)',
        grayishBlue: 'hsl(233, 13%, 49%)',
        darkGrayishBlue:'hsl(232, 13%, 33%)'
      },

      backgroundImage: {
        top: "url('/public/bg-top.svg')",
        bottom: "url('/public/bg-bottom.svg')"
      }
    
      
    },
  },

  
  plugins: [],
}