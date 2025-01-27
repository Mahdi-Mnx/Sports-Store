/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#98c1d9",
        secondery: "rgb(106, 116, 250)",
        orange: "hsl(26, 100%, 55%)",
        paleOrange: "hsl(25, 100%, 94%)",
        veryDarkBlue: "hsl(220, 13%, 13%)",
        darkGrayishBlue: "hsl(219, 9%, 45%)",
        grayishBlue: "hsl(220, 14%, 75%)",
        lightGrayishBlue: "hsl(223, 64%, 98%)",
        dark: "rgb(53, 53, 53)",
        darkGray: "rgb(104, 104, 104)",
        cadaan: "rgb(250, 250, 250)" ,
        admin: {
          primary: '#b91c1c',   // Dark Red
          secondary: '#fecaca', // Light Red
          neutral: '#64748b',   // Slate Gray
          dark: '#475569',      // Dark Slate
        },
      },
    },
  },
  plugins: [],
};
