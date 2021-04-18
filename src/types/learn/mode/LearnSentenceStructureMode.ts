import LearningMode from "../LearningMode";
import { faComment, faCube, faEllipsisH, faExclamation, faRunning } from "@fortawesome/free-solid-svg-icons";

export default class LearnSentenceStructureMode {
    getLearningTopics(): LearningMode[] {
        return [
            new LearningMode("Grammar", "#fd0e3e", faExclamation, { basics: { colours: true } }),
            new LearningMode("Particles", "#ff7730", "を", { basics: { animals: true } }),
            new LearningMode("Endings", "#1785e2", faEllipsisH, { basics: { directions: true } }),
            new LearningMode("Verbs", "#e3c93a", faRunning, { basics: { weather: true } }),
            new LearningMode("Nouns", "#3ee939", faCube, { basics: { family: true} }),
            new LearningMode("Adjectives", "#5641d0", faComment, { basics:  { body: true } })
        ];
    }

    getTopic(): string {
        return "SENTENCE";
    }

    isCustomisable(): boolean {
        return false;
    }
}