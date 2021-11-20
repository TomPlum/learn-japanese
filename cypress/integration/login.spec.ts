it('User can login', () => {
    //Visits the play screen.
    cy.visit('menu/play');

    //Types in the username and password and logs in.
    cy.contains('Login').click();
    cy.get('input[placeholder=Username]').type('Tester');
    cy.get('input[placeholder=Password]').type('password123-');
    cy.class('UserForm').find('button').contains('Login').click();

    //Checks that the login model disappears and that login has changed to the users nickname.
    cy.class('UserForm').should('not.exist');
    cy.contains('Login').should('not.exist');
    cy.contains('TestyMcTestFace').should('exist').should('be.visible');
});

it('Username or password is wrong', () => {
    //Visits the play screen.
    cy.visit('menu/play');

    //Incorrectly types in the username and password and attempts to login
    cy.contains('Login').click();
    cy.get('input[placeholder=Username]').type('Tester');
    cy.get('input[placeholder=Password]').type('wrongpassword');
    cy.class('UserForm').find('button').contains('Login').click();

    //Checks the error message shows and that the user model still exists.
    cy.contains('Username or password is incorrect.');
    cy.class('UserForm').should('exist');
});

it('What happens when API is down', () => {
    //Intercepts login request and stubs 500 error
    cy.intercept(
        {
            method: 'POST',
            url: Cypress.env('host') + '/user/login',
        },
        {
            statusCode: 500,
            body: {}
        }
    ).as('login');

    //Visits the play screen.
    cy.visit('menu/play');

    //Types in the username and password and tries to login.
    cy.contains('Login').click();
    cy.get('input[placeholder=Username]').type('Tester');
    cy.get('input[placeholder=Password]').type('password123-');
    cy.class('UserForm').find('button').contains('Login').click();

    //Checks that the user model still exists, is visible and that an error message is prompted.
    cy.class('UserForm').should('exist').should('be.visible');
    cy.contains('Sorry, an error had occurred.');
});

it('Too many failed attempts at login', () => {
    cy.visit('menu/play');
    cy.contains('Login').click();
    cy.get('input[placeholder=Username]').type('Tester');

    for (let i = 0; i < 3; i++) {
        cy.get('input[placeholder=Password]').type('Wrong123-');
        cy.class('UserForm').find('button').contains('Login').click();

        cy.get('input[placeholder=Password]').should('to.have.value', '');
    }

    cy.contains('Too many failed attempts, please try again later.')





})
