const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: false,
  },
  e2e: {
    baseUrl: "https://demowebshop.tricentis.com",
    env: {
      apiBaseUrl: "https://openlibrary.org",
    },
    setupNodeEvents(on, config) {},
  },
});
