/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-dark-blue": "#10141e",
        "theme-light-blue": "#171e31",
        "theme-light-blue2": "#5a6a90",
        "theme-logo-red":"#fc4747"
      }
    },
  },
  plugins: [],
};
