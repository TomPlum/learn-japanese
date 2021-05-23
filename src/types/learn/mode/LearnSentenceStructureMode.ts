import LearningMode from "../LearningMode";
import { faComment, faCube, faExclamation, faFire, faRunning } from "@fortawesome/free-solid-svg-icons";
import LearnMenuModes from "./LearnMenuModes";

export default class LearnSentenceStructureMode extends LearnMenuModes {
    getLearningTopics(): LearningMode[] {
        return [
            new LearningMode("Adverbs", "#5641d0", faExclamation, { sentence: { adverbs: true } }),
            new LearningMode("Particles", "#ff7730", "を", { sentence: { particles: true } }),
            new LearningMode("Expressions", "#1785e2", faComment, { sentence: { expressions: true } }),
            new LearningMode("Verbs", "#e3c93a", faRunning, { sentence: { verbs: true } }),
            new LearningMode("Nouns", "#4fdb4b", faCube, { sentence: { nouns: true} }),
            new LearningMode("Adjectives", "#fd0e3e", faFire, { sentence:  { adjectives: true } })
        ];
    }

    getTopic(): string {
        return "SENTENCE";
    }
}