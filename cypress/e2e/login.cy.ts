describe('Successful Login', () => {
    it('Login using "login" button ', () => {
        cy.visit('/home');
        cy.getByTestId('navigation-bar').contains('Login').click();
        cy.getByTestId('username-input').type('MorbinTime');
        cy.getByTestId('password-input').type('Testing123-');
        cy.getByTestId('login-button').click();
        cy.getByTestId('navigation-bar').contains('Morbius');
    });
});

describe('Unsuccessful Login', () => {
   it('Incorrect password', () => {
       cy.visit('/home');
       cy.getByTestId('navigation-bar').contains('Login').click();
       cy.getByTestId('username-input').type('MorbinTime');
       cy.getByTestId('password-input').type('Testing123-');
       cy.getByTestId('login-button').click();
       cy.getByTestId('login-form').contains('Username or password is incorrect.')
   });

});