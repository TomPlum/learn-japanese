import {Topic} from "./Topic";
import {User} from "../../src/slices/UserSlice";

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

Cypress.Commands.add('login', () => {
    cy.request({
        url: Cypress.env('host') + "/user/login",
        body: {"username": "Testing", "password": "Testing123-"},
        method: "POST",
    }).then((res:Response<User>) => {
        localStorage.setItem('user', JSON.stringify({
            username: res.username,
            email: res.email,
            nickname: res.nickname,
            roles: res.roles,
            locked: res.locked,
            expired: res.expired,
            credentialsExpired: res.credentialsExpired,
            enabled: res.enabled,
            creationDate: res.creationDate,
            token: res.token,
            preferences: {
                defaultFont: res.preferences.defaultFont,
                language: res.preferences.language,
                theme: res.preferences.theme,
                confidenceMenuStyle: res.preferences.confidenceMenuStyle,
                highScores: res.preferences.highScores,
                cardsPerDay: res.preferences.cardsPerDay,
                defaultMode: res.preferences.defaultMode
            }
        }))
    })
})