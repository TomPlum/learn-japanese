import {Topic} from "./Topic";

declare global {
    declare namespace Cypress {
        interface Chainable {
            class(className: string): Chainable<any>;
            getByTitle(titleName: string): Chainable<any>;
            startGame(presetName: string, topicName?: Topic);
            startAndQuit(presetName: string, topicName?: Topic);
            navigateToMenu();
            selectTopic(presetName: string, topicName?: Topic);
            getAuthToken(func: (token: string) => void);
            login();
            authorisedRequest(options: Partial<RequestOptions>): Chainable<any> | undefined;
        }
    }
}
