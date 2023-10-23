import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        floaty: {
          "0%, 100%": { transform: "translate(0px, 0.5vh)" },
          "50%": { transform: "translate(0px, -0.5vh)" },
        },
        bulge: {
          "0%, 100%": { transform: "scale(1) rotate(0deg)" },
          "25%": { transform: "scale(0.75) rotate(-5deg)" },
          "50%": { transform: "scale(0.5) rotate(0deg)" },
          "75%": { transform: "scale(0.75) rotate(5deg)" },
        },
      },
      animation: {
        wiggle: `wiggle 1s ease-in-out infinite`,
        bulge: `bulge 1s ease-in-out infinite `,
        floaty: "floaty 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
