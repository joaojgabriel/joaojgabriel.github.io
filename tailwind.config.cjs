/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
    },
    fontFamily: {
      rubik: ["Rubik", defaultTheme.fontFamily.sans],
    },

    extend: {
      fontSize: {
        bodycopy: 18,
      },
      gridTemplateColumns: {
        xl: "212px repeat(3, 248px)",
      },
      colors: {
        blue: "hsl(246, 80%, 60%)",
        verydarkblue: "hsl(226, 43%, 10%)",
        darkblue: "hsl(235, 46%, 20%)",
        desaturatedblue: "hsl(235, 45%, 61%)",
        paleblue: "hsl(236, 100%, 87%)",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
