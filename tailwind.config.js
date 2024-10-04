/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightGreen: "#A8D5BA",
        pastellBlue: "#B0D7E5",
        softBrown: "#C1A78C",
        creamyWhite: "#C1A78C",
        yellowish: "#F4E5C2"
      }
    },
  },
  plugins: [],
}

