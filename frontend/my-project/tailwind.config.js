/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bright-blue": "#01d1ff",
        "bright-green": "#2ff3c1",
        "bright-pink": "#CF3ACC",
      },
      backgroundColor: {
        "outer-background": "#120425",
        "inner-background": "#1d1e3d",
      },
    },
    fontFamily: {
      roboto: ["Roboto"],
    },
  },
  plugins: [],
};
