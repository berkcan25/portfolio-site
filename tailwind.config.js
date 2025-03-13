/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#121219',
        'bg-light': '#FFFCFA',
        'borders': '#272B31',
        'hover-borders-dark': '#FFFFFF',
        'hover-bg-light': '#FFDCCD',
      },
      fontFamily: {
        sans: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
