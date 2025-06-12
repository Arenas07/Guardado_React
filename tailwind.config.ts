import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class', // importante
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          background: "rgb(var(--background-1) / <alpha-value>)",
          background2: "rgb(var(--background-2) / <alpha-value>)",
          darkGray: "rgb(var(--light-dark-container) / <alpha-value>)",
          darkGreen: "rgb(var(--dark-green) / <alpha-value>)",
          lightGreen: "rgb(var(--light-green) / <alpha-value>)"
        },
      },
    },
    plugins: [],
  };
  