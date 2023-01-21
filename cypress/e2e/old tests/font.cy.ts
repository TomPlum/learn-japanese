import { Topic } from "../../support/Topic"

describe("Test Font Change", () => {
    it("Should change font of the kanji", () => {
        cy.startGame("Kanji", Topic.KANJI)
        cy.class("ControlsMenu").find("span:contains('Font')").click()
        cy.get("span:contains('Handwriting')").click()
    })
})
