it('User can login', () => {
    cy.visit('#/#/menu/play');

    cy.contains('Login').click();
    cy.get('input[placeholder=Username').type('Tester');
    cy.get('input[placeholder=Password').type('password123-');
    cy.class('UserForm').find('button').contains('Login').click();

    cy.class('UserForm').should('not.exist')
    cy.contains('Login').should('not.exist')
    cy.contains('TestyMcTestFace').should('exist').should('be.visible')
});