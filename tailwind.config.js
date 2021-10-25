module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'josefin': ['"Josefin Sans"', 'sans-serif'],
        'lora': ['"Lora"', 'serif'],
        'varela': ['"Varela"', 'sans-serif'],
        'varela-round': ['"Varela Round"', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
