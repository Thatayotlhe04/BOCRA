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
        surface: {
          DEFAULT: "#ECEEF1",
          card: "#FFFFFF",
          raised: "#F5F6F8",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        card: "14px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "card-hover": "0 4px 14px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)",
        "card-lift": "0 8px 28px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
