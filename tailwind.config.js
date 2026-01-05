/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      clamp_title: "clamp(1.15rem, 2.5vw, 1.7rem)",
      clamp_subtitle: "clamp(0.9rem, 2vw, 1.15rem)",
      clamp_text: "clamp(0.85rem, 1.5vw, 1rem)",
      clamp_subtext: "clamp(0.75rem, 1vw, 0.8rem)",
    }
  },
}

