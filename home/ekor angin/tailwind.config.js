/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    './**/*.html',


  ],
  theme: {
    screens: {
      xs1: "270px",
      sm1: "400px",
      md1: "620px",
      lg1: "776px",
      xl1: "1240px",
    },
    extend: {},
  },
  plugins: [],
}