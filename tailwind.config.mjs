/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: "var(--font-bebas-neue)", // Make sure this variable is set elsewhere
        poppins: ["Poppins", "sans-serif"], // Ensure Poppins is loaded via Google Fonts or locally
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
