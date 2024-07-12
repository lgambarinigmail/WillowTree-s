describe('Cypress exercise', () => {

    // Here we have a beforeEach that focus on visiting our baseUrl in every scenario
    beforeEach(() => {
        cy.visit('/')
    })

    // This group of scenarios are focus on add a new computer, so we have  add computer, then a failing scenario
    // add
    it('scenarios name', () => {
        //code
    })
})