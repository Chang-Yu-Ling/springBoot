//https://learn.cypress.io/testing-your-first-application/installing-cypress-and-writing-your-first-test
// npx cypress open
// https://stackoverflow.com/questions/62524625/how-to-save-the-entire-html-source-of-a-page-being-tested-with-cypress
describe('template spec', () => {  
  beforeEach(() => {
    cy.visit('https://moodle.ncku.edu.tw/')
  })
  // it('passes', () => {    
  //   cy.visit('http://localhost:9000/')
  //   cy.get('input').type("123")
  //   cy.get('button').click
  //   cy.wait()//https://www.npmjs.com/package/cypress-wait-until
  // })
  it('passes', () => {
    cy.visit('https://moodle.ncku.edu.tw/')
    cy.get('html:root').eq(0).invoke('prop', 'innerHTML').then((doc) => {
      cy.writeFile('pageMarkup.html', doc);
    });
    cy.get('[class="page-header-headings"]').eq(0).invoke('prop', 'innerHTML').then((doc) => {
      cy.writeFile('./topic_1/page-header-headings.html', doc);
    });
  })
})