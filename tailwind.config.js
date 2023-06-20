/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "text-head": "#11b7bb",
      },
      fontSize: {
        xxs: [
          "0.6rem",
          {
            lineHeight: "0.6rem",
          },
        ],
      },
      dropShadow: {
        glow: [
          "0 0px 1px rgba(255, 255, 255, 0.4)",
          "0 0px 4px rgba(255, 255, 255, 0.2)",
        ],
      },
      animation: {
        blob: "blob 9s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "25%": {
            transform: "translate(-20px, -60px) scale(1.1)",
          },
          "50%": {
            transform: "translate(30px, -10px) scale(0.9)",
          },
          "75%": {
            transform: "translate(20px, 60px) scale(1.1)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
