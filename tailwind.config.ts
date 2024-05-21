import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
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
      },
      colors: {
        "app-bg-color": "#f5f5f5",
        "app-bg-color-dark": "#333",
        "app-text-color": "#333",
        "app-text-color-dark": "#fff",
        "app-border-color": "#ccc",
        "app-border-color-dark": "#555",
        "btn-bg-color": "#ccc",
        "btn-bg-color-dark": "#555",
        "btn-text-color": "#333",
        "btn-text-color-dark": "#fff",
        "input-bg-color": "#fff",
        "input-bg-color-dark": "#777",
        "project-card-bg-color": "#c4c4c4",
        "project-card-bg-color-dark": "#666",
        "project-card-border-color": "#d3d3d3",
        "project-card-border-color-dark": "#555",
        "modal-text-color": "#555",
        "modal-text-color-dark": "#222",
        "modal-btn-bg-color": "#999",
        "modal-btn-bg-color-dark": "#888",
        "modal-btn-text-color": "#333"
      }
    }
  },
  plugins: []
} satisfies Config;
