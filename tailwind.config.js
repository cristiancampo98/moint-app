/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    'xs': '475px',
    ...defaultTheme.screens,
    extend: {},
  },
  plugins: [],
  prefix: 'tw-',
}
