it('Test you can change nickname', () => {
    cy.login().then(() => {
        cy.request({
            url: Cypress.env('host') + "/user/set-nickname/Test%20Account",
            method: "PUT",
            headers: {"Authorization": "Bearer " + JSON.parse(localStorage.getItem('user')!).token}
        })

    })

    cy.visit('#/profile')

    cy.contains('About')
    cy.contains('Test Account')

    cy.class('About_card').class('edit').click({force: true})
    cy.get('input[placeholder=Nickname]').clear().type('Test Account Change')
    cy.class('About_save').class('About_icon').click({force: true})
    cy.contains('Test Account Change')
});