/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('assets/images/hero-mountain.jpg')",
      },
      keyframes: {
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "bounce-slow": "bounceSlow 2s infinite",
      },
    },
  },
  plugins: [],
};
