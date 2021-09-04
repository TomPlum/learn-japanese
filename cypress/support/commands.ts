Cypress.Commands.add('class', (className) => {
    return cy.get('[class*=' + className + "]")
})

