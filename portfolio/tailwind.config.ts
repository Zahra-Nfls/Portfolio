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
        dm: ['DM Serif Text'],
        playfair: ["Playfair Display" ],
        bodoni: ["Bodoni Moda SC"],
        eb: ["EB Garamond"],
        caveat: ["Caveat Brush"],
        play:["Play"],
        lilita: ["Lilita One"],
        dancing: ['Dancing Script'],
        nanum: ['Nanum Gothic'],

    },
  },
  },
  plugins: [],
};
export default config;
