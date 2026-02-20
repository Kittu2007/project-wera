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
          DEFAULT: "#F9FAFB",
          foreground: "#1F2937",
        },
        accent: {
          blue: "#E0F2FE",
          purple: "#F3E8FF",
          peach: "#FFEDD5",
        },
        success: "#DEF7EC",
        successText: "#03543F",
        warning: "#FDF6B2",
        warningText: "#723B13",
        danger: "#FDE8E8",
        dangerText: "#9B1C1C",
        info: "#E1EFFE",
        infoText: "#1E429F",
      },
      borderRadius: {
        xl: "1.5rem",
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
        full: "9999px",
      },
      boxShadow: {
        "soft": "0 10px 40px -10px rgba(0,0,0,0.05)",
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.05)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
