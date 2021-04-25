import LearningMode from "../LearningMode";
import LearnMenuModes from "./LearnMenuModes";
import { faPalette, faCat, faCompass, faCloudSunRain, faChild, faHandPaper } from "@fortawesome/free-solid-svg-icons";

export default class LearnBasicsMode extends LearnMenuModes {
    getLearningTopics(): LearningMode[] {
        return [
            new LearningMode("Colours", "#fd0e3e", faPalette, { basics: { colours: true } }),
            new LearningMode("Animals", "#ff7730", faCat, { basics: { animals: true } }),
            new LearningMode("Directions", "#1785e2", faCompass, { basics: { directions: true } }),
            new LearningMode("Weather", "#e3c93a", faCloudSunRain, { basics: { weather: true } }),
            new LearningMode("Family", "#3ee939", faChild, { basics: { family: true} }),
            new LearningMode("Body", "#5641d0", faHandPaper, { basics:  { body: true } })
        ];
    }

    getTopic(): string {
        return "BASICS";
    }
}