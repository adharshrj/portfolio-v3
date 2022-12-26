/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{png, jpg}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../public/assets/bg2.jpg')",
      },
    },
  },
  plugins: [],
}