/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        "jacobi-navy": "#2F4451",
        "jacobi-light": "#EEF2F5",
        "jacobi-dark": "#1C2B36",
      },
    },
  },
  plugins: [],
};