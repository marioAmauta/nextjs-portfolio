import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "pancake-stack": "auto 1fr auto"
      },
      minHeight: {
        "screen-dynamic": "100dvh"
      },
      padding: {
        "5%": "5%",
        "10%": "10%",
        "15%": "15%"
      }
    }
  },
  plugins: []
};

export default config;
