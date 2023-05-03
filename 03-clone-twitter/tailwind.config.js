/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        small: 13,
        medium: 15,
      },
      colors: {
        primary: "#15202b",
        secondary: "#1e2732",
        button: "#1d9bf0",
        borderColor: "#404850",
      },
    },
  },
  plugins: [],
};
