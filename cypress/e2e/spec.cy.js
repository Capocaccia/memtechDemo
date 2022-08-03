describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').should('contain.text', 'Next').should('be.visible')
  })
})