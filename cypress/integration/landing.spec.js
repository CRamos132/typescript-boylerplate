context('The landing page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
    it('loads', () => {
      cy.url().should('eq', 'http://localhost:3000/')
    });
});
