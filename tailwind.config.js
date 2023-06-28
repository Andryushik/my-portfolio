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
    },
  },
  plugins: [],
};
