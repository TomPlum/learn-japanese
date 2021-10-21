it('Test you can change nickname', () => {
    cy.login()
    cy.contains('Test Account').click()
    cy.contains('Profile').click()
    cy.contains('About')
});