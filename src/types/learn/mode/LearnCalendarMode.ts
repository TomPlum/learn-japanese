import LearningMode from "../LearningMode";
import LearnMenuModes from "./LearnMenuModes";
import { faAlignLeft, faCalendarAlt, faCalendarDay, faClock, faSnowflake, faVial } from "@fortawesome/free-solid-svg-icons";

export default class LearnCalendarMode extends LearnMenuModes {
    getLearningTopics(): LearningMode[] {
        return [
            new LearningMode("Days of the Week", "#fdb40e", faCalendarDay, { calendar: { days: true } }),
            new LearningMode("Months of the Year", "#ff7730", faCalendarAlt, { calendar: { months: true } }),
            new LearningMode("Temporal Nouns", "#ec2352", faClock, { calendar: { nouns: true } }),
            new LearningMode("Seasonal", "#2cade0", faSnowflake, { calendar: { season: true } }),
            new LearningMode("Common Phrases", "#ff6038", faAlignLeft, { calendar: { phrases: true } }),
            new LearningMode("Everything", "#41d085", faVial, { calendar: { days: true, months: true, season: true, nouns: true, phrases: true } })
        ];
    }

    getTopic(): string {
        return "CALENDAR";
    }
}