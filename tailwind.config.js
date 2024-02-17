module.exports = {
  content: [
    "./_drafts/**/*.html",
    "./_includes/**/*.html",
    "./_includes/**/*.liquid",
    "./_layouts/**/*.html",
    "./_layouts/**/*.liquid",
    "./_posts/*.md",
    "./*.md",
    "./*.html",
  ],
  theme: {
    theme: {
      extend: {},
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
