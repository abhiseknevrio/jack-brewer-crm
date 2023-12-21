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
        labelCol: '#0E1013',
        gray: '#6B7285',
        btnBg: '#485DD9',
        inputBg: '#F6F6F6',
        borderColor: '#2B2C43',
        linkColor: '#4099FF'
      },
      width: {
        '40%': '40%',
        '60%': '60%',
        '339': '339px',
        form: '421px',
      },
      fontSize: {
        title: '32px'
      }
    },
  },
  plugins: [],
}

