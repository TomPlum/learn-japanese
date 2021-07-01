import { faPalette, faCat, faCompass, faCloudSunRain, faChild, faHandPaper } from "@fortawesome/free-solid-svg-icons";
import { MenuModes } from "../../MenuModes";
import SessionMode from "../../SessionMode";

export default class LearnBasicsMode implements MenuModes {
    getModes(): SessionMode[] {
        return [
            new SessionMode("Colours", "#fd0e3e", faPalette, { basics: { colours: true } }),
            new SessionMode("Animals", "#ff7730", faCat, { basics: { animals: true } }),
            new SessionMode("Directions", "#1785e2", faCompass, { basics: { directions: true } }),
            new SessionMode("Weather", "#e3c93a", faCloudSunRain, { basics: { weather: true } }),
            new SessionMode("Family", "#3ee939", faChild, { basics: { family: true} }),
            new SessionMode("Body", "#5641d0", faHandPaper, { basics:  { body: true } })
        ];
    }

    getTopic(): string {
        return "BASICS";
    }
}