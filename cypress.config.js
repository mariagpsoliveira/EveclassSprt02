const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    baseUrl: 'https://testando.eveclass.com/pt/auth/entrar',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
