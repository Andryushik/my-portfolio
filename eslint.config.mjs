import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  {
    // One-page site: /#section links are plain <a> on purpose, app/page.js scrolls to them.
    rules: { "@next/next/no-html-link-for-pages": "off" },
  },
];

export default eslintConfig;
