/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'baby-blue': '#9fccfa',
        'blue-crayola': '#00a6ff',
        'star-blue': '#0880C0',
      },
      borderRadius: {
        xl: '50px',
      },
    },
  },
  plugins: [],
};
