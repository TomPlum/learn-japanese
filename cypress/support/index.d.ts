declare namespace Cypress {
    interface Chainable {
       class(className: string): Chainable<any>
    }
}