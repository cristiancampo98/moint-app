const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    screens: {
      xxs: "320px",
      xs: "475px",
      xsm: "540px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
  prefix: "tw-",
};
