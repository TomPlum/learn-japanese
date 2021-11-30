import {Topic} from "./Topic";

declare global {
    declare namespace Cypress {
        interface Chainable {
            class(className: string): Chainable<any>;
            getByTitle(titleName: string): Chainable<any>;
            startGame(): Chainable<any>;
            startAndQuit(presetName: string, topicName?: Topic): Chainable<any>;
            navigateToMenu(): Chainable<any>;
            selectTopic(presetName: string, topicName?: Topic): Chainable<any>;
        }
    }
}
