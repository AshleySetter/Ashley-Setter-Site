module.exports = {
  extends: [
      "@nqminds/eslint-config", // for Node.JS code
      "@nqminds/eslint-config-react", // for React/Webpack/Babel code
  ],
  parser: "babel-eslint",
  parserOptions: {
      "sourceType": "module",
      "allowImportExportEverywhere": true,
  },
};