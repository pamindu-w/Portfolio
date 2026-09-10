import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1A1A2E",
          2: "#151528",
          3: "#20203A",
        },
        paper: {
          DEFAULT: "#EEECE6",
          2: "#E3E0D6",
        },
        signal: {
          DEFAULT: "#FF6A3D",
          dim: "#C24E2A",
        },
        teal: {
          DEFAULT: "#4FD6C4",
          dim: "#2E8C80",
        },
        mist: "#9AA3B5",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backdropBlur: {
        glass: "20px",
        "glass-strong": "40px",
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
