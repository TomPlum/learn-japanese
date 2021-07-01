import { faComment, faCube, faExclamation, faFire, faRunning } from "@fortawesome/free-solid-svg-icons";
import SessionMode from "../../SessionMode";
import { MenuModes } from "../../MenuModes";

export default class LearnSentenceStructureMode implements MenuModes {
    getModes(): SessionMode[] {
        return [
            new SessionMode("Adverbs", "#5641d0", faExclamation, { sentence: { adverbs: true } }),
            new SessionMode("Particles", "#ff7730", "を", { sentence: { particles: true } }),
            new SessionMode("Expressions", "#1785e2", faComment, { sentence: { expressions: true } }),
            new SessionMode("Verbs", "#e3c93a", faRunning, { sentence: { verbs: true } }),
            new SessionMode("Nouns", "#4fdb4b", faCube, { sentence: { nouns: true} }),
            new SessionMode("Adjectives", "#fd0e3e", faFire, { sentence:  { adjectives: true } })
        ];
    }

    getTopic(): string {
        return "SENTENCE";
    }
}