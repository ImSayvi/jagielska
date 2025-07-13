/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        //sans: ["Inter", "sans-serif"],
      },
      colors:{
        primary: "#fe9808",
        dark: "#1111111"
      },
      container:{
        center: true,
        padding: {
          default: "1rem",
          sm: "2rem",
        }
      }
    },
  },
  plugins: [],
}

