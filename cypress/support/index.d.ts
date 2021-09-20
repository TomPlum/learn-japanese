import {Topic} from "./Topic";

declare namespace Cypress {
    interface Chainable {
       class(className: string): Chainable<any>;
       getByTitle(titleName: string): Chainable<any>;
       startGame(presetName: string, topicName?: Topic): Chainable<any>;
       startAndQuit(presetName: string, topicName?: Topic): Chainable<any>;
       navigateToMenu(): Chainable<any>;
    }
}
