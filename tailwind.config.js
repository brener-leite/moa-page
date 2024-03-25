/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  screens: {
    sm: "320px",
    md: "768px",
    lg: "1024px",
  },
  theme: {
    extend: {
      colors: {
        "off-white": "#fefcef",
      },
    },
    fontFamily: {
      encode: ["Encode Sans SC", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
}
