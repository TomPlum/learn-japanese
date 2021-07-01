import { faAlignLeft, faCalendarAlt, faCalendarDay, faClock, faSnowflake, faVial } from "@fortawesome/free-solid-svg-icons";
import { MenuModes } from "../../MenuModes";
import SessionMode from "../../SessionMode";

export default class LearnCalendarMode implements MenuModes {
    getModes(): SessionMode[] {
        return [
            new SessionMode("Days of the Week", "#fdb40e", faCalendarDay, { calendar: { days: true } }),
            new SessionMode("Months of the Year", "#ff7730", faCalendarAlt, { calendar: { months: true } }),
            new SessionMode("Temporal Nouns", "#ec2352", faClock, { calendar: { nouns: true } }),
            new SessionMode("Seasonal", "#2cade0", faSnowflake, { calendar: { season: true } }),
            new SessionMode("Common Phrases", "#ff6038", faAlignLeft, { calendar: { phrases: true } }),
            new SessionMode("Everything", "#41d085", faVial, { calendar: { days: true, months: true, season: true, nouns: true, phrases: true } })
        ];
    }

    getTopic(): string {
        return "CALENDAR";
    }
}