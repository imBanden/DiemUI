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
        'code': ['var(--font-source-code-pro)']
      },
      colors: {
        'custom-orange': 'rgb(241, 90, 34)',
        'custom-white': 'rgb(241, 242, 242)'
      },
    },
  },
  plugins: [],
};
export default config;
