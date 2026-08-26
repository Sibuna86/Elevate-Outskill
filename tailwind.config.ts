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
        background: "#080A0F",
        surface: "#0D111A",
        "surface-card": "#131826",
        "surface-card-hover": "#182032",
        border: "#1F293D",
        "border-light": "#2E3D58",
        brand: {
          coral: "#FF5D22",
          "coral-light": "#FF7A47",
          "coral-glow": "rgba(255, 93, 34, 0.25)",
          cyan: "#00F2FE",
          "cyan-light": "#38BDF8",
          "cyan-glow": "rgba(0, 242, 254, 0.25)",
          blue: "#2563EB",
          mint: "#00E599",
          "mint-glow": "rgba(0, 229, 153, 0.2)",
          purple: "#7928CA",
          indigo: "#6366F1",
          amber: "#FBBF24",
          rose: "#FA5D29",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "neon-coral": "0 0 25px -5px rgba(255, 93, 34, 0.4)",
        "neon-cyan": "0 0 25px -5px rgba(0, 242, 254, 0.4)",
        "neon-mint": "0 0 25px -5px rgba(0, 229, 153, 0.35)",
        "card-glow": "0 10px 35px -5px rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
export default config;
