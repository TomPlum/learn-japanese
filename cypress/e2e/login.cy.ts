it('User can login', () => {
    cy.visit('http://localhost:3001/learn-japanese/home')
    cy.getByTestId('navigation-bar').contains('Login').click()
    cy.getByTestId('login-form').click()
    cy.contains('div', 'Username').find('input').first().type('MorbinTime')
    cy.contains('div', 'Password').find('input').first().type('Testing123-')
    cy.contains('div', 'form-group').find('button').click()
});
