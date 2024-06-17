/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#98c1d9",
        secondery: "rgb(106, 116, 250)",
      },
    },
  },
  plugins: [],
};
