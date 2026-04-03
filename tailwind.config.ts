import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#dcecff",
          500: "#1d5fa8",
          700: "#15477d",
          900: "#12304f",
        },
        ink: "#163047",
        mist: "#edf2f7",
      },
      boxShadow: {
        card: "0 12px 30px -20px rgba(15, 23, 42, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
