/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": '#4ca2e4',
        "secondary-color": '#8bc2ee',
      },
    },
  },
  plugins: [],
}