import Adjective from "../../../types/sentence/Adjective";
import { AdjectiveType } from "../../../types/kana/AdjectiveType";

describe("Adjective Data Object", () => {

    const adjective = new Adjective(["interesting", "funny"], "面白い", AdjectiveType.I, "おもしろい");

    it("Should the adjective type in the title", () => {
        expect(adjective.getTitle()).toBe("い Adjective");
    });

    it("Should the adjective type in the title", () => {
        expect(adjective.getTitle()).toBe("い Adjective");
    });

});