/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-dark-blue": "#10141e",
        "theme-light-blue": "#171e31",
        "theme-light-blue2": "#5a6a90",
        "theme-logo-red": "#fc4747",
      },
    },
    fontFamily: { outfit: "Outfit" },
    screens: {
      mobile: { max: "515px" },
      tablet: { min: "515px", max: "900px" },
      small: { min: "900px", max: "1278px" },
      medium: { min: "1280px", max: "1440px" },
      large: { min: "1440px", max: "1920px" },
      xl: { min: "1920px", max: "2560px" },
      xxl: { min: "2560px", max: "3840px" },
      tv: "3840px",
    },
  },
  plugins: [],
};
