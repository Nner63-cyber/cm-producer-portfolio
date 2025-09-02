/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'open-set': {
          'primary': '#14a091',
          'secondary': '#014539',
          'tertiary': '#58687f',
          'quaternary': '#ae3f3e',
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
