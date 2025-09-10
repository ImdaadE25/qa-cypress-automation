describe('Contact Form Data-Driven Test', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('contactPage'));
  });

  function fillInputField(selector, value) {
    cy.get(selector)
      .clear()
      .type(value)
      .should('have.value', value);
  }

  it('should fill in contact form with multiple users', () => {
    cy.fixture('contact-us-form').then((users) => {
      users.forEach((persona) => {

        fillInputField('[name="your-name"]', persona.name);
        fillInputField('[name="your-email"]', persona.email);
        fillInputField('[name="your-message"]', persona.message);

        cy.wait(500);

      });
    });
  });

});
