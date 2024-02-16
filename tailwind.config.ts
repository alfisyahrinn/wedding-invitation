import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#7E7143',
        'secondary' : '#453F2A'
      },
    },
    fontFamily: { 
      cormorant: ["Cormorant", "serif"],
      dancing: ["Dancing Script", "cursive"],
      felipa: ["Felipa", "serif"],
    },
  },
  plugins: [],
};
export default config;
