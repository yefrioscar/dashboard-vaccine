const colors = require('tailwindcss/colors')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      violet: colors.violet,
      red: colors.rose,
      yellow: colors.amber,
    }
  },
  variants: {
    extend: {
      borderRadius: ['hover', 'focus'],
      borderWidth: ['hover', 'focus']
    },
  },
  plugins: [],
}
