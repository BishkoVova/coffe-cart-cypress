const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    saveJson: true,
    screenshotOnRunFailure: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    charts: true,
    reportPageTitle: 'Coffe app cypress',
    reportFilename: 'coffe-app-report-[datetime]',
    timestamp: 'yyyy-mm-dd_HH-mm-ss',
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  hideXHR: true,
  defaultCommandTimeout: 15000,
  requestTimeout: 15000,
  scrollBehavior: 'center',
  watchForFileChanges: true,
  fixturesFolder: 'cypress/fixtures',
  experimentalMemoryManagement: true,

  e2e: {
    baseUrl: 'https://coffee-cart.app',
    testIsolation: false,
    retries: 1,
    numTestsKeptInMemory: 30,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});