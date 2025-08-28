/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'open-set': {
          'primary': '#42a6c4',
          'secondary': '#ff8981',
          'tertiary': '#a1b986',
          'black': '#000000',
          'light-gray': '#cccccc',
          'light-pink': '#ffe8e6',
          'light-green': '#ecf1e7',
          'light-blue': '#d9edf3',
        }
      }
    },
  },
  plugins: [],
}
