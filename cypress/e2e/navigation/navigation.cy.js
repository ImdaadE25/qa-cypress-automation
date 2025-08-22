describe('Navigation Test', () => {

beforeEach(() => {
    cy.visit(Cypress.env('workPage'));
  })

  it('should navigate to Work page and verify content', () => {

    cy.get('#mega-menu-item-42 > .mega-menu-link')
    .click();

    cy.url()
    .should('include', 'https://www.eight25media.com/eight25-work/');
    
    cy.contains('Not all work is created equal')
    .should('be.visible');

  });
});
