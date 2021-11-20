it('Can delete account', () => {
    cy.login()
    cy.request({
        url: Cypress.env('host') + "/user/delete",
        body: {
            "password": "Testing123-"
        }
    })
    cy.request({
        url: Cypress.env('host') + "/user/register",
        body: {
            "email": "testing.testing@hotmail.com",
            "nickname": "Test Account",
            "password": "Testing123-",
            "username": "Testing"
        }
    })


    cy.login()
    cy.visit('profile')

    cy.contains('Danger Zone')
    cy.class('DangerZone_icon').class('DangerZone_unlock').click({force: true})
    cy.class('DangerZone_button').contains('Delete').click()
    cy.get('input[placeholder=Password]').type('Testing123-')
    cy.contains('Delete my account').click()
})