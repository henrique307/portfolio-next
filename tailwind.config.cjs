/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "clamp-title": "clamp(1.15rem, 2.5vw, 1.7rem)",
        "clamp-subtitle": "clamp(0.9rem, 2vw, 1.15rem)",
        "clamp-text": "clamp(0.85rem, 1.5vw, 1rem)",
        "clamp-subtext": "clamp(0.75rem, 1vw, 0.8rem)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        float: "float 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "forest"],
  },
};
