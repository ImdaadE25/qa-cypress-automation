describe('Contact Form Data-Driven Test', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('contactPage'));
  });

  it('should fill in contact form with multiple users', () => {
    cy.fixture('contact-us-form').then((users) => {
      users.forEach((persona) => {

        cy.get('[name="your-name"]')
          .clear()
          .type(persona.name)
          .should('have.value', persona.name);

        cy.get('[name="your-email"]')
          .clear()
          .type(persona.email)
          .should('have.value', persona.email);

        cy.get('[name="your-message"]')
          .clear()
          .type(persona.message)
          .should('have.value', persona.message);

      
        cy.wait(500);

      });
    });
  });

});
