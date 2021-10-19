import {Topic} from "./Topic";

Cypress.Commands.add('class', (className) => {
    return cy.get('[class*=' + className + "]")
})

Cypress.Commands.add('getByTitle', (titleName) => {
    return cy.get('[title="' + titleName + '"]')
})

Cypress.Commands.add('selectTopic', (presetName: string, topicName?: Topic) => {
    cy.navigateToMenu()
    if(topicName) cy.class('topicSelectionMenuWrapper').contains(topicName).click();
    cy.class('ModeSelectionMenu_wrapper').contains(presetName).click();
})

Cypress.Commands.add('startGame', () => {
    cy.selectTopic();
    cy.contains('Start').click();
})

Cypress.Commands.add('navigateToMenu', () => {
    cy.visit('http://localhost:3001/learn-japanese#/');
    cy.class('buttonContainer').contains('Play').click();
    cy.url().should('include', '/menu/play');
})

Cypress.Commands.add('startAndQuit', (presetName: string, topicName?: Topic) => {
    cy.startGame(presetName, topicName)
    cy.class('QuitButton_icon').click();
    cy.class('ConfirmModal_yes').click();
    cy.contains('Finish').click();
});