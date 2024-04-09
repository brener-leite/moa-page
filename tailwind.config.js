/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pink-1": "#E50D4C",
        "pink-2": "#E86DA9",
        "pink-transparent": "#E86DA917",
        "neutral-dark-1": "#000",
        "neutral-dark-2": "#0A0A0A8F",
        "neutral-dark-3": "#151515",
        "neutral-dark-4": "#1A1A1A",
        "neutral-dark-5": "#383838",
        "neutral-light-1": "#FFF",
        "neutral-light-2": "#E6E6E6",
        "neutral-light-3": "#DCDCDC",
      },
    },
    screens: {
      xs: "320px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1281px",
      "xl-custom": "1280px",
    },
    fontFamily: {
      "primary-font": ["Inter", "sans-serif"],
      "secondary-font": ["Open Sans", "sans-serif"],
    },
    fontSize: {
      xs: ["14px", "17.5px"],
      sm: ["16px", "20px"],
      md: ["18px", "22.5px"],
      lg: ["20px", "25px"],
      xl: ["24px", "30px"],
      xxl: ["44px", "54px"],
      xxxl: ["54px", "67.5px"],
      xxxxl: ["120px", "120px"],
    },
    rotate: {
      30: "30deg",
    },
  },
  plugins: [],
}
