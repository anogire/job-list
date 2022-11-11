/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1420px',
    },
    extend: {
      fontFamily: {
        'title': ['Montserrat', 'sans-serif'],
        'general': ['Roboto', 'sans-serif'],
      },
      letterSpacing: {
        'general': '-.039rem',
        'normal': '-.035rem',
        'title': '-.047rem',
      },
      boxShadow: {
        'block': '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)',
      },
      colors: {
        'board-back': '#e6e9f2',
        'board-card-mobile': '#eff0f5',
        'general-gray': '#878d9d',
        'additional-gray': '#38415d5b',
        'general-dark': '#3a4562',
        'active-page': '#5876c5',
        'not-active-page': '#70778b',
        'map-title': '#e7eaf0',
        'map-regular': '#e8ebf3',
        'map-back': '#2a3047',
        'map-back-add': '#202336',
        'employment': '#55699e',
        'employment-border': '#55699e4d',
        'employment-back': '#a1b1db51',
        'benefits': '#988B49',
        'benefits-border': '#ffcf00',
        'benefits-back': '#ffcf0026',
        'marker': '#384564a1',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
