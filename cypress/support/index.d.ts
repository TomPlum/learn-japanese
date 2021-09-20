declare namespace Cypress {
    interface Chainable {
       class(className: string): Chainable<any>;
       getByTitle(titleName: string): Chainable<any>;
       startGame(presetName: string, topicName?: string): Chainable<any>;
       startAndQuit(presetName: string, topicName?: string): Chainable<any>;
       navigateToMenu(): Chainable<any>;
    }
}
