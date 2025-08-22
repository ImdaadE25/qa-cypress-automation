// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// Prevent Cypress from failing tests on app exceptions
Cypress.on('uncaught:exception', (err) => {
  // Ignore only the "Unexpected token" error
  if (err.message.includes('Unexpected token')) {
    return false;
  }
  // Let all other errors fail the test
});