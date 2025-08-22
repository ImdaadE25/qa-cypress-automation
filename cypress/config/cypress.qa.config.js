const { defineConfig } = require('cypress');
const baseConfig = require('../config/cypress.base.config');
baseConfig.e2e.baseUrl = 'https://www.eight25media.com';
baseConfig.retries = 0;

module.exports = defineConfig({
  ...baseConfig,
});
