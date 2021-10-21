beforeEach(() => {
    cy.request({
        url: Cypress.env('host') + "/user/login",
        body: {"username": "Testing", "password": "Testing123-"},
        method: "POST",
        failOnStatusCode: false
    }).then(response => {
        if(response.isOkStatusCode){
            cy.request({
                url: Cypress.env('host') + "/user/delete",
                body: {"password": "Testing123-"},
                headers: {"Authorization": "Bearer " + response.body.token},
                method: "DELETE"
            }).then(response => {
                expect(response.status).to.eq(204);
            });
        }
    });
});

it('Register a new user', () => {
    //Visits the play screen.
    cy.visit('#/#/menu/play');

    //Gets to register screen.
    cy.contains('Login').click();
    cy.contains('I don\'t have an account').click();

    //Enters the details for the new user.
    cy.get('input[placeholder="Enter email"]').type('testing.testing@hotmail.com');
    cy.get('input[placeholder="Username"]').type('Testing');
    cy.get('input[placeholder="Nickname"]').type('Test Account');
    cy.get('input[placeholder="Password"]').type('Testing123-');
    cy.get('input[placeholder="Confirm Password"]').type('Testing123-');
    cy.get('button').contains('Register').click();

    cy.contains('Register').should('not.exist');
    cy.contains('Login').should('exist');
    cy.class('UserForm').should('exist').should('be.visible');
    cy.get('input[placeholder="Username"]').should('have.value', 'Testing');
});
