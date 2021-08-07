import PlayMode from "../../session/PlayMode";
import { PlayMenuModes } from "../../MenuModes";
import { faChild, faCloudSunRain, faCompass, faDog, faFillDrip, faHandPaper } from "@fortawesome/free-solid-svg-icons";
import { BasicsSettingsBuilder } from "../../session/settings/data/BasicsSettings";
import { GameSettingsBuilder } from "../../session/settings/game/GameSettings";
import { QuestionSettingsBuilder } from "../../session/settings/game/QuestionSettings";
import { QuestionType } from "../QuestionType";
import LearnableField from "../../learn/LearnableField";
import { TimeSettingsBuilder } from "../../session/settings/game/TimeSettings";
import { HintSettingsBuilder } from "../../session/settings/game/HintSettings";
import { LifeSettingsBuilder } from "../../session/settings/game/LifeSettings";

export default class PlayBasicsModes implements PlayMenuModes {
    getModes(): PlayMode[] {
        const gameSettings = new GameSettingsBuilder()
            .withQuestionSettings(new QuestionSettingsBuilder()
                .withCardQuantity(4)
                .withScoreTracking()
                .withType(QuestionType.CHOICE)
                .withFields(LearnableField.MEANING, LearnableField.JAPANESE)
                .build()
            )
            .withTimeSettings(new TimeSettingsBuilder().isTimed().build())
            .withHintSettings(new HintSettingsBuilder().isEnabled(false).build())
            .withLifeSettings(new LifeSettingsBuilder().withQuantity(5).build())
            .build();

        return [
            new PlayMode("Colours", "#db6b25", faFillDrip,
                new BasicsSettingsBuilder().withColours().withQuantity(25).build(),
                gameSettings
            ),
            new PlayMode("Animals", "#439bdc", faDog,
                new BasicsSettingsBuilder().withAnimals().withQuantity(25).build(),
                gameSettings
            ),
            new PlayMode("Directions", "#d01b4c", faCompass,
                new BasicsSettingsBuilder().withDirections().withQuantity(25).build(),
                gameSettings
            ),
            new PlayMode("Weather", "#e3c93a", faCloudSunRain,
                new BasicsSettingsBuilder().withWeather().withQuantity(25).build(),
                gameSettings
            ),
            new PlayMode("Family", "#23b820", faChild,
                new BasicsSettingsBuilder().withFamily().withQuantity(25).build(),
                gameSettings
            ),
            new PlayMode("Body", "#5641d0", faHandPaper,
                new BasicsSettingsBuilder().withBody().withQuantity(25).build(),
                gameSettings
            )
        ];
    }

    getTopic(): string {
        return "BASICS";
    }
}
