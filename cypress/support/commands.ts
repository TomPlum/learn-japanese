import {Topic} from "./Topic";
import {User} from "../../src/slices/UserSlice";
import Response = Cypress.Response;

Cypress.Commands.add('class', (className) => {
    return cy.get('[class*=' + className + "]");
});

Cypress.Commands.add('getByTitle', (titleName) => {
    return cy.get('[title="' + titleName + '"]');
});

Cypress.Commands.add('selectTopic', (presetName: string, topicName?: Topic) => {
    cy.navigateToMenu();
    if(topicName) cy.class('topicSelectionMenuWrapper').contains(topicName).click();
    cy.class('ModeSelectionMenu_wrapper').contains(presetName).click();
});

Cypress.Commands.add('startGame', () => {
    cy.selectTopic();
    cy.contains('Start').click();
});

Cypress.Commands.add('navigateToMenu', () => {
    cy.visit('http://localhost:3001/learn-japanese#/');
    cy.class('buttonContainer').contains('Play').click();
    cy.url().should('include', '/menu/play');
});

Cypress.Commands.add('startAndQuit', (presetName: string, topicName?: Topic) => {
    cy.startGame(presetName, topicName);
    cy.class('QuitButton_icon').click();
    cy.class('ConfirmModal_yes').click();
    cy.contains('Finish').click();
});

Cypress.Commands.add('login', () => {
    cy.request({
        url: Cypress.env('host') + "/user/login",
        body: {"username": "Testing", "password": "Testing123-"},
        method: "POST",
    }).then((res: Response<User>) => {
        localStorage.setItem('user', JSON.stringify({
            username: res.body.username,
            email: res.body.email,
            nickname: res.body.nickname,
            roles: res.body.roles,
            locked: res.body.locked,
            expired: res.body.expired,
            credentialsExpired: res.body.credentialsExpired,
            enabled: res.body.enabled,
            creationDate: res.body.creationDate,
            token: res.body.token,
            preferences: {
                defaultFont: res.body.preferences.defaultFont,
                language: res.body.preferences.language,
                theme: res.body.preferences.theme,
                confidenceMenuStyle: res.body.preferences.confidenceMenuStyle,
                highScores: res.body.preferences.highScores,
                cardsPerDay: res.body.preferences.cardsPerDay,
                defaultMode: res.body.preferences.defaultMode
            }
        }));
    });
});
