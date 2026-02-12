/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        ink: "#0a0a0a",
        paper: "#f5f4f0",
        ash: "#1a1a1a",
        mist: "#e8e6e0",
        slate: "#888888",
        accent: "#c8b89a",
      },
      borderRadius: {
        DEFAULT: "0",
        sm: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        full: "0",
      },
      animation: {
        "grid-move": "gridMove 20s linear infinite",
        "line-scan": "lineScan 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        counter: "counter 2s ease-out forwards",
      },
      keyframes: {
        gridMove: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(60px)" },
        },
        lineScan: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
