import { faCat, faChild, faCloudSunRain, faCompass, faHandPaper, faPalette } from "@fortawesome/free-solid-svg-icons";
import { LearnMenuModes } from "../../MenuModes";
import LearnMode from "../../session/LearnMode";
import LearnSettings from "../../session/settings/LearnSettings";
import { BasicsSettingsBuilder } from "../../session/settings/data/BasicsSettings";

export default class LearnBasicsModes implements LearnMenuModes {
    getModes(): LearnMode[] {
        const defaultLearnSettings = new LearnSettings();

        return [
            new LearnMode(1, "Colours", "#fd0e3e", faPalette,
                new BasicsSettingsBuilder().withColours().build(),
                defaultLearnSettings
            ),
            new LearnMode(1, "Animals", "#ff7730", faCat,
                new BasicsSettingsBuilder().withAnimals().build(),
                defaultLearnSettings
            ),
            new LearnMode(1, "Directions", "#1785e2", faCompass,
                new BasicsSettingsBuilder().withDirections().build(),
                defaultLearnSettings
            ),
            new LearnMode(1, "Weather", "#e3c93a", faCloudSunRain,
                new BasicsSettingsBuilder().withWeather().build(),
                defaultLearnSettings
            ),
            new LearnMode(1, "Family", "#3ee939", faChild,
                new BasicsSettingsBuilder().withFamily().build(),
                defaultLearnSettings
            ),
            new LearnMode(1, "Body", "#5641d0", faHandPaper,
                new BasicsSettingsBuilder().withBody().build(),
                defaultLearnSettings
            )
        ];
    }

    getTopic(): string {
        return "BASICS";
    }
}
