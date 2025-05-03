import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "deep-navy": "#2b3945", // Dark Mode Elements
      "midnight-blue": "#202c37", // Dark Mode Background
      "charcoal-black": "#111517", // Light Mode Text
      "slate-gray": "#858585", // Input Text
      "cloud-white": "#fafafa", // Light Mode Background
      "pure-white": "#ffffff", // Dark Mode Text & Light Mode Elements
      "light-hover": "#eaeaea", // Hover color for components
      "light-active": "#d5d5d5", // Active color for  components
      "dark-hover": "#354a5a",  // Hover color for components
      "dark-active": "#1f2e3a" // Active color for components
    },
  },
  plugins: [],
};
export default config;
