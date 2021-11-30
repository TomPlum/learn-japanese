it('Can delete account', () => {
    cy.request({
        url: Cypress.env('host') + "/user/register",
        method: "POST",
        body: {
            "email": "testing.testing@hotmail.com",
            "nickname": "Test Account",
            "password": "Testing123-",
            "username": "Testing"
        },
        failOnStatusCode: false
    });

    cy.login();
    cy.visit('profile');

    cy.contains('Danger Zone');
    cy.class('DangerZone_icon').class('DangerZone_unlock').click({force: true});
    cy.class('DangerZone_button').contains('Delete').click();
    cy.get('input[placeholder=Password]').type('Testing123-');
    cy.contains('Delete my account').click();
});
