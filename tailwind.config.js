/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  screens: {
    sm: "320px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  theme: {
    extend: {
      colors: {
        "pink-1": "#E50D4C",
        "pink-2": "#E86DA9",
        "neutral-dark-1": "#000",
        "neutral-dark-2": "#0A0A0A8F",
        "neutral-dark-3": "#151515",
        "neutral-light-1": "#FFF",
        "neutral-light-2": "#E6E6E6",
        "neutral-light-3": "##DCDCDC",
      },
    },
    fontFamily: {
      "primary-font": ["Inter", "sans-serif"],
      "secondary-font": ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
}
