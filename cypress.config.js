const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
dotenv.config();

const frontendUrl = process.env.FRONTEND_URL;
console.log('frontendUrl', frontendUrl);

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  e2e: {
    baseUrl: frontendUrl,
    browser: "chrome",
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: "c7mb57",
});

