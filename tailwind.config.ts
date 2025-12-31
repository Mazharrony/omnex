import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "foreground-secondary": "var(--foreground-secondary)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-light": "var(--accent-light)",
        border: "var(--border)",
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      spacing: {
        "8pt": "8px",
        "16pt": "16px",
        "24pt": "24px",
        "32pt": "32px",
        "48pt": "48px",
        "64pt": "64px",
        "96pt": "96px",
        "128pt": "128px",
      },
    },
  },
  plugins: [],
};
export default config;

