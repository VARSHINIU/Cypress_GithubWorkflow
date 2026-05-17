const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "reports",
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    baseUrl: process.env.BASE_URL,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});