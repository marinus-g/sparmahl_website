/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2c5e21",
        "secondary": "#f0f4e4",
      },
    },
  },
  plugins: [],
}