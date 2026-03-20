import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bocra: {
          navy: "#0C2340",
          "navy-light": "#163158",
          blue: "#0077B6",
          "blue-light": "#EAF5FD",
          green: "#00A651",
          "green-light": "#E8F9EF",
          magenta: "#E31B6D",
          "magenta-light": "#FDE9F1",
          yellow: "#FFD100",
          "yellow-light": "#FFF9E3",
        },
        surface: "#F5F6F8",
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        card: "14px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)",
        "card-hover": "0 4px 12px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)",
        "card-lift": "0 8px 24px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
