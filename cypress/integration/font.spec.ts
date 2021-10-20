import {Topic} from "../support/Topic";

describe('Test Font', () => {
    it('Should update the kanji font when i change font from the menu', () => {
        cy.startGame('Kanji', Topic.KANJI);
        cy.class('ControlsMenu').find("span:contains('Font')").click()
        cy.get("span:contains('Handwriting')").click()

    })
})