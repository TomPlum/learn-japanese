import { PlayMenuModes } from "../../MenuModes";
import PlayMode from "../../session/PlayMode";
import { GameSettingsBuilder } from "../../session/settings/game/GameSettings";
import { QuestionSettingsBuilder } from "../../session/settings/game/QuestionSettings";
import { QuestionType } from "../QuestionType";
import LearnableField from "../../learn/LearnableField";
import { TimeSettingsBuilder } from "../../session/settings/game/TimeSettings";
import { HintSettingsBuilder } from "../../session/settings/game/HintSettings";
import { LifeSettingsBuilder } from "../../session/settings/game/LifeSettings";
import { faAlignLeft, faCalendarAlt, faCalendarDay, faClock, faCloudSunRain, faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { CalendarSettingsBuilder } from "../../session/settings/data/CalendarSettings";

export default class PlayCalendarModes implements PlayMenuModes {
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
            new PlayMode("Days of the Week", "#3fb4de", faCalendarDay,
                new CalendarSettingsBuilder().withDays().build(),
                gameSettings
            ),
            new PlayMode("Months of the Year", "#ff7730", faCalendarAlt,
                new CalendarSettingsBuilder().withMonths().build(),
                gameSettings
            ),
            new PlayMode("Temporal Nouns", "#e32f2f", faClock,
                new CalendarSettingsBuilder().withTemporalNouns().build(),
                gameSettings
            ),
            new PlayMode("Seasonal", "#e7cb38", faCloudSunRain,
                new CalendarSettingsBuilder().withSeasons().build(),
                gameSettings
            ),
            new PlayMode("Common Phrases", "#ff6038", faAlignLeft,
                new CalendarSettingsBuilder().withPhrases().build(),
                gameSettings
            ),
            new PlayMode("Everything", "#39c461", faGlobeAmericas,
                new CalendarSettingsBuilder().withDays().withMonths().withTemporalNouns().withSeasons().withPhrases().build(),
                gameSettings
            )
        ];
    }

    getTopic(): string {
        return "CALENDAR";
    }
}
