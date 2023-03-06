/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const theme = {
  colors: {
    ...colors,
    primary: "#2F2F2F",
    "dark-primary": "#F1F1F1",
    secondary: "#FFBF00",
    background: "rgba(249,249,244)", //"#F1F1F1",
    "dark-background": "#18181b",
    accent: "#2F2F2F",
    "gray-dark": "#273444",
    gray: "#8492a6",
    "gray-light": "#d3dce6",
  },
  fontSize: {
    xs: ["0.75rem", { lineHeight: "1rem" }],
    sm: ["0.875rem", { lineHeight: "1.5rem" }],
    base: ["1rem", { lineHeight: "1.5rem" }],
    lg: ["1.125rem", { lineHeight: "2rem" }],
    xl: ["1.25rem", { lineHeight: "1.75rem" }],
    "2xl": ["1.5rem", { lineHeight: "2rem" }],
    "3xl": ["2rem", { lineHeight: "3rem" }],
    "4xl": ["2.5rem", { lineHeight: "3rem" }],
    "5xl": ["3rem", { lineHeight: "1" }],
    "6xl": ["3.75rem", { lineHeight: "1" }],
    "7xl": ["4.5rem", { lineHeight: "1" }],
    "8xl": ["6rem", { lineHeight: "1" }],
    "9xl": ["8rem", { lineHeight: "1" }],
  },
  extend: {
    animation: {
      "fade-in": "fade-in 0.5s linear forwards",
      marquee: "marquee var(--marquee-duration) linear infinite",
      "spin-slow": "spin 4s linear infinite",
      "spin-slower": "spin 6s linear infinite",
      "spin-reverse": "spin-reverse 1s linear infinite",
      "spin-reverse-slow": "spin-reverse 4s linear infinite",
      "spin-reverse-slower": "spin-reverse 6s linear infinite",
    },
    borderRadius: {
      "4xl": "2rem",
      "5xl": "2.5rem",
    },
    spacing: {
      128: "32rem",
      144: "36rem",
    },
    borderRadius: {
      "4xl": "2rem",
    },
    keyframes: {
      "fade-in": {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      },
      marquee: {
        "100%": {
          transform: "translateY(-50%)",
        },
      },
      "spin-reverse": {
        to: {
          transform: "rotate(-360deg)",
        },
      },
    },
  },
  contianer: {
    center: true,
    padding: {},
    margin: {},
  },
};

module.exports = {
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory. // App Is Beta TODO
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme,
  plugins: [],
};
