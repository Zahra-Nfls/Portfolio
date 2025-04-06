import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        handwritten: ['Patrick Hand', 'cursive'],
        indie: ['Indie Flower', 'cursive'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        abril: ["Abril Fatface", "serif"],
        yeseva: ["Yeseva One", "serif"],
        comfortaa: ["Comfortaa", "sans-serif"],
        libre: ['"Libre Baskerville"', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
