module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'anton': ['Anton', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      screens: {
        xsmall: {
          min: '350px',
          max: '640px'
        }
      }
    },
  },
  plugins: [],
}
