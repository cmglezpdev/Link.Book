/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        "layout": "275px"
      },
      height: {
        "navbar": "30px",
        "layout": "420px"
      },
      minHeight: {
        "layout": "425px"
      }
    },
  },
  plugins: [],
}
