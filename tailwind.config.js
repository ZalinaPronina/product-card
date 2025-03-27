const path = require("path");

module.exports = {
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        "adorn-condensed-sans": ["Adorn Condensed Sans", "sans-serif"],
        "futuraPT-sans":["Futura PT", "sans-serif"]
      },
      colors: {
        'regal-pink': '#FDF5F4',
        'regal-pink-dark': '#FDE0DC',
        'btn-primary-bg': '#FFD11F',
        'body-dark': '#242323'
      },
      fontSize: {
        '4xl': '2.5rem',
      }
    },
  },

  plugins: [],
  content: [
    path.resolve(__dirname, "./src/**/*.{js,vue}"),
    path.resolve(__dirname, "./shopify/**/*.liquid"),
  ],
};
