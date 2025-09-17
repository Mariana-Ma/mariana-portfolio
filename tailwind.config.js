/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
          fontFamily: {
          minecraft: ['Minecraft', 'sans-serif'],
          garet: ['Garet', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };