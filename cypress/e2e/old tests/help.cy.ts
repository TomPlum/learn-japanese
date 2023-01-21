it("Load Genki Knowledge Bank Screen", () => {
    cy.visit("http://localhost:3001/learn-japanese/menu/learn")
    cy.contains("Help").click()
    cy.contains("Genki Knowledge Bank").click()
    cy.contains("Showing 1138 definitions from Genki I and II.")
})

it("What happens when we get error 500", () => {
    cy.intercept(
        {
            method: "GET",
            url: Cypress.env("host") + "/genki/all"
        },
        {
            statusCode: 500,
            body: {}
        }
    ).as("Error 500: Genki Data Not Loaded :P")
    cy.visit("http://localhost:3001/learn-japanese/genki")
    cy.contains("Error Loading Data")
})
