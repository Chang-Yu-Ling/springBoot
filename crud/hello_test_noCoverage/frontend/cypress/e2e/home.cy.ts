describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
    // 下面用法就很像 JQuery 就不在解釋了
    cy.get('#input').type("Cypress Test")
    cy.get('button').click()
    //cy.url().should('include', '/search')
  })
})