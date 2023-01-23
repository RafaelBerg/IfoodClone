/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        "gray-350": "#3E3E3E",
        "gray-150": "#F2F2F2",
        "gray-select": "#6F6F6F"
        
      },
      height: {
        "full-size" : "80.4vh",        
      },
      width: {
        "22": "80px",
        "size": "120vh"
      },
      maxHeight: {
        "100": "65.7vh",
        "120": "75.7vh"
      },
    },
  },
  plugins: [],
}
