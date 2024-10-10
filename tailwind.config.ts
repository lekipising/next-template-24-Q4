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
        hello: {
          50: "#fff3ed",
          100: "#ffe4d4",
          200: "#ffc4a8",
          300: "#ff9b70",
          400: "#ff6537",
          500: "#ff481d",
          600: "#f02306",
          700: "#c71507",
          800: "#9e120e",
          900: "#7f130f",
          950: "#450505",
        },
      },
    },
  },
  plugins: [],
};
export default config;
