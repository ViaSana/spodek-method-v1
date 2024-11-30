import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          red: "#CB1C1A",
          lightBlue: "#8AB9FF",
          blue: "#B0C4DE",
          white: "#FFFDF8",
          black: "#010101",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
