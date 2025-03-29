import type { Config } from "tailwindcss";

const config: Config = {
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
      "slate-gray": "#858585", // Light Mode Input
      "cloud-white": "#fafafa", // Light Mode Background
      "pure-white": "#ffffff", // Dark Mode Text & Light Mode Elements
    },
  },
  plugins: [],
};
export default config;
