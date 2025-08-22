describe('Contact Form Test', () => {

    beforeEach(() => {
    cy.visit(Cypress.env('contactPage'));
  })

  it('should fill in contact form with sample data', () => {

      cy.fixture('contact-us-form').then((persona) => {

      cy.get('[name="your-name"]')
      .type(persona.name)
      .should('have.value', persona.name);

      cy.get('[name="your-email"]')
      .type(persona.email)
      .should('have.value', persona.email);

      cy.get('[name="your-message"]')
      .type(persona.message)
      .should('have.value', persona.message);

    });
    
  });

});
