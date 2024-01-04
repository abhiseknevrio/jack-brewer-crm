/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgWhite: "#FFFFFF",
        textBlack: "#1E263C",
        textBlue: "#485DD9",
        labelCol: '#0E1013',
        gray: '#6B7285',
        btnBg: '#485DD9',
        inputBg: '#F6F6F6',
        borderColor: '#2B2C43',
        lightGray: '#70707027',
        linkColor: '#4099FF',
        redCol: '#FF276A'
      },
      width: {
        '20%': '20%',
        '40%': '40%',
        '60%': '60%',
        '80%': '80%',
        '339': '339px',
        form: '421px',
      },
      height: {
        '700': '700px'
      },
      fontSize: {
        title: '32px'
      },
      margin: {
        '30': '30px',
        '50': '50px',
        '130': '130px'
      }
    },
  },
  plugins: [],
}