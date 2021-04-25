import LearningMode from "../LearningMode";
import { faComment, faCube, faEllipsisH, faExclamation, faRunning } from "@fortawesome/free-solid-svg-icons";
import LearnMenuModes from "./LearnMenuModes";

export default class LearnSentenceStructureMode extends LearnMenuModes {
    getLearningTopics(): LearningMode[] {
        return [
            new LearningMode("Grammar", "#fd0e3e", faExclamation, { sentence: { grammar: true } }),
            new LearningMode("Particles", "#ff7730", "を", { sentence: { particles: true } }),
            new LearningMode("Endings", "#1785e2", faEllipsisH, { sentence: { endings: true } }),
            new LearningMode("Verbs", "#e3c93a", faRunning, { sentence: { verbs: true } }),
            new LearningMode("Nouns", "#3ee939", faCube, { sentence: { nouns: true} }),
            new LearningMode("Adjectives", "#5641d0", faComment, { sentence:  { adjectives: true } })
        ];
    }

    getTopic(): string {
        return "SENTENCE";
    }
}