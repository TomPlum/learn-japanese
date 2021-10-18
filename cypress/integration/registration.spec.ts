afterEach(() => {
    cy.request({
        url: "/user/login",
        body: {"username": "Testing", "password": "Testing123-"},
    }).then(response => {
        cy.request({
            url: "/user/delete",
            body: {"password": "TomGay1-"},
            headers: {"Authorization": response.body.token}
        }).then(response => {
            expect(response.status).to.eq(200);
        });
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

    cy.class('UserForm').should('exist').should('be.visible');
    cy.contains('Login');
    cy.get('input[placeholder="Username"]').should('have.value', 'Testing')

});
