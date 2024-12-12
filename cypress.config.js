const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  e2e: {
    env: {
      uiBaseUrl: "https://demowebshop.tricentis.com",
      apiBaseUrl: "https://openlibrary.org",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
