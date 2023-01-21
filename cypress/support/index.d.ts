import { Topic } from "./Topic"

declare global {
    declare namespace Cypress {
        interface Chainable {
            class(className: string): Chainable<any>
            getByTestId(id: string): Chainable<any>
            getAuthToken(func: (token: string) => void)
            login()
            authorisedRequest(options: Partial<RequestOptions>): Chainable<any> | undefined
        }
    }
}
