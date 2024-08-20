/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quantico: ['Quantico', 'sans-serif'],
      },
      colors: {
        'custom-dark': '#180d1f',
        'custom-topbar': '#4d166d',
      }
    },
    plugins: [],
  }
}
