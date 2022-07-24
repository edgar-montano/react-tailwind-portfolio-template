/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgdark: "#16697A",
        bglight: "#EDE7E3",
        primary: "#FFA62B", // electron blue
        secondary: "#E17A47",
        tenary: "#EFC958",
      },
    },
  },
  plugins: [],
};
