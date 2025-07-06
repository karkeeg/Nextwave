/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-reverse": "float-reverse 5s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
