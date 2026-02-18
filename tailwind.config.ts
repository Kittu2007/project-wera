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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#000000",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F3F4F6",
          foreground: "#1F2937",
        },
        accent: {
          blue: "#E0F2FE", // Soft pastel blue
          purple: "#F3E8FF", // Soft pastel purple
          peach: "#FFEDD5", // Soft pastel peach
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "soft": "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        "glow": "0 0 40px -10px rgba(168, 85, 247, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;
