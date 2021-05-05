module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      lightbrown: {
        DEFAULT: '#f8b06d'
      },
      lesslightbrown: {
        DEFAULT: '#f8a14f'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
