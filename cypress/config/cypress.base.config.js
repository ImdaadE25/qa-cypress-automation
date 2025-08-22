const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
  retries: 2,
  video: false,
  viewportWidth: 1440,
  viewportHeight: 1200,
  env: {
    contactPage: '/lets-talk/',
    workPage:'/eight25-work/'
  }
});
