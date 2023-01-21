describe("User Dashboard", () => {
    describe("Kanji Showcase Card", () => {
        it("should render kanji character when loading kanji showcase card", () => {
            cy.login()
            cy.visit("home")
            cy.getByTestId("kanji-showcase-card-character")
                .invoke("val")
                .should("match", /([一-龯])/)
        })
    })
})
