const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://test.raiser.work/#',
    defaultCommandTimeout: 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  viewportWidth: 1536,
  viewportHeight: 864,

  //viewportWidth: 1920,
  //viewportHeight: 1200,

});
