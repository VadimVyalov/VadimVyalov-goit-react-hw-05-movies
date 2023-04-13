/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
        mm: [
          '0 5px 5px 2px rgba(0, 0, 0, 0.2)',
          '0 2px 5px 0 rgba(0, 0, 0, 0.14)',
          '0 5px 5px -5px rgba(0, 0, 0, 0.12)',
        ],
      },
    },
  },
  plugins: [],
};
