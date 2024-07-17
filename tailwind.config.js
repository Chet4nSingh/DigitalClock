/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'game': ["Press Start 2P", "sans-serif"],
        'anton': ["Anton SC", "sans-serif"],
      },
    },
  },
  plugins: [],
};
