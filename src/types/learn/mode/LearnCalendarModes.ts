import { faAlignLeft, faCalendarAlt, faCalendarDay, faClock, faSnowflake, faVial } from "@fortawesome/free-solid-svg-icons";
import { LearnMenuModes } from "../../MenuModes";
import LearnMode from "../../session/LearnMode";
import { CalendarSettingsBuilder } from "../../session/settings/data/CalendarSettings";
import LearnSettings from "../../session/settings/LearnSettings";

export default class LearnCalendarModes implements LearnMenuModes {
    getModes(): LearnMode[] {
        const defaultLearnSettings = new LearnSettings();

        return [
            new LearnMode("Days of the Week", "#fdb40e", faCalendarDay,
                new CalendarSettingsBuilder().withDays().build(),
                defaultLearnSettings
            ),
            new LearnMode("Months of the Year", "#ff7730", faCalendarAlt,
                new CalendarSettingsBuilder().withMonths().build(),
                defaultLearnSettings
            ),
            new LearnMode("Temporal Nouns", "#ec2352", faClock,
                new CalendarSettingsBuilder().withTemporalNouns().build(),
                defaultLearnSettings
            ),
            new LearnMode("Seasonal", "#2cade0", faSnowflake,
                new CalendarSettingsBuilder().withSeasons().build(),
                defaultLearnSettings
            ),
            new LearnMode("Common Phrases", "#ff6038", faAlignLeft,
                new CalendarSettingsBuilder().withPhrases().build(),
                defaultLearnSettings
            ),
            new LearnMode("Everything", "#41d085", faVial,
                new CalendarSettingsBuilder().withDays().withMonths().withTemporalNouns().withSeasons().withPhrases().build(),
                defaultLearnSettings
            )
        ];
    }

    getTopic(): string {
        return "CALENDAR";
    }
}