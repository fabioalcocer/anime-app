/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
<<<<<<< HEAD
      colors: {
        "blue-1100": "#31334C",
=======
      backgroundImage: {
        snk: "url('./src/assets/snk-banner.png')",
        deathnote: "url('./src/assets/deathnote-banner.jpg')",
        tokyo: "url('./src/assets/tokyo-banner.jpg')",
        kny: "url(./src/assets/kny-banner.webp)",
        jk: "url('./src/assets/jk-banner.jpg')",
        tg: "url('./src/assets/tg-banner.jpg')"
      },
      colors: {
        "blue-1000": "#040420",
>>>>>>> 9926f5a40093082c578707dc74c8c8d29c4c7d6a
      },
    },
  },
  plugins: [[require("prettier-plugin-tailwindcss")]],
};
