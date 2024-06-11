/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(180, 219, 113)",
        secondery: "rgb(106, 116, 250)",
      },
    },
  },
  plugins: [],
};
