import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "serif"],
      },
      colors: {
        ink: {
          950: "#0a0e1a",
          900: "#111827",
          800: "#1f2937",
          700: "#374151",
          600: "#4b5563",
          500: "#6b7280",
          400: "#9ca3af",
          300: "#d1d5db",
          200: "#e5e7eb",
          100: "#f3f4f6",
          50:  "#f9fafb",
        },
        brand: {
          600: "#1d4ed8",
          500: "#2563eb",
          400: "#3b82f6",
          100: "#dbeafe",
          50:  "#eff6ff",
        },
        emerald: {
          600: "#059669",
          500: "#10b981",
          100: "#d1fae5",
          50:  "#ecfdf5",
        },
        amber: {
          600: "#d97706",
          500: "#f59e0b",
          100: "#fef3c7",
          50:  "#fffbeb",
        },
        rose: {
          600: "#e11d48",
          500: "#f43f5e",
          100: "#ffe4e6",
          50:  "#fff1f2",
        },
      },
    },
  },
  plugins: [],
};

export default config;
