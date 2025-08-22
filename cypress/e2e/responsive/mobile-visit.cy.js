describe('Responsive Check', () => {

    beforeEach(() => {
    cy.visit('/') 
    cy.viewport(375, 667);
  })

 it('visiting in mobile', () => {
    cy.url().should('eq', 'https://www.eight25media.com/');
      
  });


});
