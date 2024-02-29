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
        antonio: ['Antonio', 'sans-serif'],
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/background-stars.svg')",
      },
      keyframes: {
        planetScale: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        planetScale: 'planetScale 1s linear forward',
      },
      
    },
  },
  plugins: [],
};
