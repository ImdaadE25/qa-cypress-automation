describe('Homepage Test', () => {

  beforeEach(() => {
    cy.visit('/') 
  })

  it('should load homepage and check title', () => {

    cy.title().should('include', 'eight25');

  });


});
