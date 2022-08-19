it('Test you can change nickname', () => {
    //Registers test account, if it already exists it skips.
    cy.fixture('register').then(request => {
        cy.request({
            url: Cypress.env('host') + "/user/register",
            method: "POST",
            body: request,
            failOnStatusCode: false
        }).then(() => {
            //Sets nickname of the account to "Test Account"
            cy.authorisedRequest({
                url: Cypress.env('host') + "/user/set-nickname/Test%20Account",
                method: "PUT"
            });
        });
    });

    cy.login()
    cy.visit('/profile');

    cy.contains('About');
    cy.contains('Test Account');

    cy.class('About_card').class('edit').click({force: true});
    cy.get('input[placeholder=Nickname]').clear().type('Test Account Change');

    cy.class('About_save').class('About_icon').click({force: true});
    cy.contains('Test Account Change');

});