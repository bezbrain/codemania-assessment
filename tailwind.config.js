/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxl: "1350px",
        lgScreen: "1055px",
        iPad: "951px",
        iPadAir: "820px",
        surfaceDuo: "540px",
        iPhone: "435px",
        smallPhone: "330px",
      },
      backgroundImage: {
        // "signin-image": "url('./src/assets/images/signinImage.jpg')",
      },
      boxShadow: {
        customShadow: "0px 0px 30px 10px rgba(0,0,0,0.1);",
      },
    },
  },
  plugins: [],
};
