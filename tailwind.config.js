
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-in": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-20px)" },
        },
        "pop-in": {
            "0%": {opacity: "0", transform: "scale(0.7)"},
            "50%": {opacity: "1", transform: "scale(1.05)"},
            "100%": {opacity: "1",transform: "scale(1)"}
        },
      },
      animation: {
        "slide-in": "slide-in 0.3s ease-out forwards",
        "slide-out": "slide-out 0.3s ease-in forwards",
        "pop-in": "pop-in 0.5s ease-out forwards"
      },
    },
  },
  plugins: [],
}
