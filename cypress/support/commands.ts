import {Topic} from "./Topic";

Cypress.Commands.add('class', (className) => {
    return cy.get('[class*=' + className + "]")
})

Cypress.Commands.add('getByTitle', (titleName) => {
    return cy.get('[title="' + titleName + '"]')
})

Cypress.Commands.add('startGame', (presetName: string, topicName?: Topic) => {
    cy.navigateToMenu()
    if(topicName) cy.class('topicSelectionMenuWrapper').contains(topicName).click();
    cy.class('ModeSelectionMenu_wrapper').contains(presetName).click();
})

Cypress.Commands.add('navigateToMenu', () => {
    cy.visit('https://tomplum.github.io/learn-japanese/#/');
    cy.class('buttonContainer').contains('Play').click();
    cy.url().should('include', '/menu/play');
})

Cypress.Commands.add('startAndQuit', (presetName: string, topicName?: Topic) => {
    cy.startGame(presetName, topicName)
    cy.contains('Start').click();
    cy.class('QuitButton_icon').click();
    cy.class('ConfirmModal_yes').click();
    cy.contains('Finish').click();
});