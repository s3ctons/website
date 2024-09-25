import type { Config } from "tailwindcss"
import colors from "tailwindcss/colors"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anonymousPro: ["var(--anonymous-pro)"],
      },
      colors: {
        primary: colors.emerald,
        secondary: colors.zinc,
        yellow: "#ffd455",
      },
    },
  },
  plugins: [],
}
export default config
