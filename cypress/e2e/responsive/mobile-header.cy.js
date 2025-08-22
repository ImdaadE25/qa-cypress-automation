describe('Responsive Check', () => {

    beforeEach(() => {
    cy.visit('/') 
   
    
  })

  it('should not display hamburger menu in desktop view', () => {

    cy.get('.navbar-toggler')
    .should('not.be.visible');

  });

  it('should display hamburger menu in mobile view', () => {

    cy.viewport(375, 667);
    
    cy.get('.navbar-toggler')
    .should('be.visible');

  });


});
