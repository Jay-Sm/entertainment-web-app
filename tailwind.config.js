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
      tablet: { min: "515px", max: "899px" },
      small: "900px",
      medium: "1280px",
      large: "1440px",
      xl: "1920px",
      xxl: "2560px",
      tv: "3840px",
    },
  },
  plugins: [],
};
