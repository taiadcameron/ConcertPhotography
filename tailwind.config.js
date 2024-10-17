/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        night: "#111111",
        "white-smoke": "#F3F3F3",
        amethyst: "#9C64E0",
        butterscotch: "#D8971C",
      },
    },
  },
  plugins: [],
};
