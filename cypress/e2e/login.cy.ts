describe("Successful Login", () => {
    it("Login via the modal on the home page", () => {
        cy.visit("/home")

        cy.getByTestId("navigation-bar").contains("Login").click()
        cy.getByTestId("username-input").type("MorbinTime")
        cy.getByTestId("password-input").type("Testing123-")
        cy.getByTestId("login-button").click()

        cy.getByTestId("navigation-bar").contains("Morbius")
    })

    it("Login via the modal on the login page", () => {
        cy.visit("/login")

        cy.getByTestId("username-input").type("MorbinTime")
        cy.getByTestId("password-input").type("Testing123-")
        cy.getByTestId("login-button").click()

        cy.getByTestId("navigation-bar").contains("Morbius")
        cy.url().should("include", "/home")
    })
})

describe("Unsuccessful Login", () => {
    it("Incorrect password", () => {
        cy.visit("/home")

        cy.getByTestId("navigation-bar").contains("Login").click()
        cy.getByTestId("username-input").type("MorbinTime")
        cy.getByTestId("password-input").type("Wong password")
        cy.getByTestId("login-button").click()

        cy.getByTestId("login-form").contains("Username or password is incorrect.")
    })
})
