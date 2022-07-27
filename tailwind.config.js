/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgdark: "#16697A",
        bglight: "#EDE7E3",
        primary: "#FFA62B",
        secondary: "#E17A47",
        tenary: "#EFC958",
        darker: "#0a192f",
      },
    },
  },
  plugins: [],
};
