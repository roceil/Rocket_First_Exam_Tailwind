module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    fontFamily: {
      'body': ["Roboto", 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        banner:
          "url('https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/week2/banner.png')",
      },
      colors: {
        primary: '#891818',
        secondary: '#707070',
      },
      container: {
        center: true,
        padding: "20px",
      },
      screens: {
        sm: "588px",
        // => @media (min-width: 588px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1240px",
        // => @media (min-width: 1240px) { ... }
      },
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
    ],
  },
};
