/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  darkMode: 'class', // important!
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
