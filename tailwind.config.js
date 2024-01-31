/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'pretty-pink': '#ffeee9',
        'pretty-peach': '#dc6164'
      },
    },
  },
  plugins: [],
}

