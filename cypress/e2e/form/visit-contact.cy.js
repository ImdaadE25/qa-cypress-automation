describe('Contact Form Test', () => {

    beforeEach(() => {
    cy.visit(Cypress.env('contactPage'));
  })

  it('visiting contact us page ', () => {
    cy.url().should('eq', 'https://www.eight25media.com/contact/');
      
  });

});
