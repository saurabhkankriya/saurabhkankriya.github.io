/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ["./layouts/**/*.html", "./content/**/*.{html,md}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Aleo', 'serif'],
      },
      colors: {
        'bg-primary-light': colors.white,
        'text-primary-light': colors.neutral[800],
        'text-secondary-light': colors.neutral[600],
        'border-primary-light': colors.neutral[300],
        'accent-light': colors.sky[600],

        'bg-primary-dark': '#121212',
        'bg-secondary-dark': '#1a1a1a',
        'bg-tertiary-dark': '#1a1a1a',  
        'text-primary-dark': '#ffffff',
        'text-secondary-dark': '#ffffff',
        'border-primary-dark': colors.neutral[700],
        'accent-dark': colors.sky[500],
      },
    },
  },
  plugins: [],
} 
