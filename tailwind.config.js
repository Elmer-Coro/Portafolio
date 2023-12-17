/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mgh: "rgb(251, 251, 239)",
      },
      boxShadow: {
        blur: "0 0 1000px 50px rgb(139 92 246)",
      },
      boxShadow: {
        dm: "0 0 12px",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};
