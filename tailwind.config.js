/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "techit-gray": { 100: "#222222", 300: "#262626" },
        "techit-yellow": { 350: "#ff7710" },
        "techit-blue": { 500: "#3B82F6", 700: "#1D4ED8" },
      },
      backgroundImage: {
        "banner-0": "url('/images/home_banner_360_unity_1st.webp')",
        "banner-1": "url('/images/home_banner_360_epson.webp')",
        "banner-2": "url('/images/home_banner_360_likelion-next.webp')",
        "banner-3": "url('/images/home_banner_360_startupstation_5th.webp')",
      },
    },
    fontFamily: {
      pretendard: ["Pretendard"],
    },
  },
  plugins: [],
};
