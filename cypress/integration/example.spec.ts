describe('Example', () => {
    it('Anything', () => {

        cy.visit('https://tomplum.github.io/learn-japanese/#/');
        cy.class('buttonContainer').contains('Learn').click()
        cy.url().should('include', '/menu/learn')
        cy.contains('Kanji').click()
        cy.class('settings').click()
        cy.contains('Grade 3').click()
        cy.contains('Quantity').click()
        cy.get('[class*=QuantityField_input]').type('3')
        cy.contains('Confirm').click()
        cy.contains('Start').click()

        cy.get('[class=react-card-front]').click()
        cy.get('[class*=forgottenButton]').click()
        cy.get('[class*=remembered').contains('0')
        cy.get('[class*=next]').click()
        cy.get('[class*=remembered').contains('1')

        cy.get('[class=react-card-front]').click()
        cy.get('[class*=rememberedButton]').click()
        cy.get('[class*=remembered').contains('1')
        cy.get('[class*=forgotten').contains('0')
        cy.get('[class*=next]').click()
        cy.get('[class*=remembered').contains('1')
        cy.get('[class*=forgotten').contains('1')

        cy.get('[class=react-card-front]').click()
        cy.get('[class*=forgottenButton]').click()
        cy.get('[class*=remembered').contains('1')
        cy.get('[class*=next]').click()

    })
})