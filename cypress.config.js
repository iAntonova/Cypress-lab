const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cxut92',
  e2e: {
    baseUrl: 'https://test.raiser.work/#',
    defaultCommandTimeout: 120000,
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      // cypress-plugin-api:
      snapshotOnly: false,   // frue for combining API calls w/ UI test
      hideCredentials: true, // 
      requestMode: false     // frue for using .request() not .api()
    }
  },

  viewportWidth: 1600,
  viewportHeight: 900,

  //viewportWidth: 1920,
  //viewportHeight: 1200,

});


require('@applitools/eyes-cypress')(module);
