/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: '#A91079', // Puedes ajustar este color al que necesites
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}