/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      color: {
        primary: "#201F21",
        accent: "#201F21",
        secondary: "#E7453B",
        dark: "#E7453B",
      },
      // color: {
      //   primary: "#662549",
      //   accent: "#451952",
      //   secondary: "#872341",
      //   dark: "#451952",
      // },
    },
  },
  plugins: [],
});
