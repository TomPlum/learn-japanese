it('Check profile screen', () => {
    cy.visit('#/#/menu/play');

    //Types in the username and password and logs in.
    cy.contains('Login').click();
    cy.get('input[placeholder=Username]').type('Testing');
    cy.get('input[placeholder=Password]').type('Testing123-');
    cy.class('UserForm').find('button').contains('Login').click();
    cy.contains('Test Account').click()
    cy.contains('Profile').click()

    cy.contains('About')
    cy.contains('Overview')
    cy.contains('Preferences')
    cy.contains('Ranks')
    cy.contains('Stats')
    cy.contains('Danger Zone')

})