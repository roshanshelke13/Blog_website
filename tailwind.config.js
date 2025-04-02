/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 7px 7px 2px rgb(104, 105, 105)',
        custom1: '7px 0px 7px 2px rgb(104, 105, 105)',
      }
    },
  },
  plugins: [],
}

