/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "theme-100": "#ff014f",
        "theme-200": "#ff014f",
        "theme-300": "#2C3333",
        "theme-400": "#CAD5E2",
      },
      fontFamily: {
        'custom-100': ['Poppins', 'sans-serif'],
      },
      animation: {
        fadeIn: "fadeIn 1200ms ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      variants: {
        animation: ["motion-safe"]
    }
    },
  },
  plugins: [require("daisyui")],
}