/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/background-stars.svg')",
      },
    },
  },
  plugins: [],
};
