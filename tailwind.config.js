/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "techit-gray": {
          50: "#F5F5F5",
          100: "rgb(229, 229, 229)",
          200: "#737373",
          300: "#262626",
          400: "#222222",
        },
        "techit-pink": { 100: "#F7E3FC" },
        "techit-purple": { 100: "#E8E5FF" },
        "techit-green": { 100: "#EAF7EB" },
        "techit-yellow": { 100: "#FFEDD5", 350: "#ff7710" },
        "techit-blue": {
          100: "#E5F4FF",
          200: "#E5EFFE",
          500: "#3B82F6",
          700: "#1D4ED8",
        },
        "techit-teal": { 200: "#CBFBF1" },
        "techit-red": { 100: "#FCE8E6" },
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
