import { faAppleAlt, faCalendarAlt, faFont, faPaintBrush, faYenSign, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import LearnMenuModes from "./learn/mode/LearnMenuModes";
import LearnKanaMode from "./learn/mode/LearnKanaMode";
import LearnKanjiMode from "./learn/mode/LearnKanjiMode";
import LearnBasicsMode from "./learn/mode/LearnBasicsMode";
import LearnCalendarMode from "./learn/mode/LearnCalendarMode";

export default class Topic {
    private readonly _name: string;
    private readonly _icon: IconDefinition;
    private readonly _modes: LearnMenuModes;

    public static KANA = new Topic("Hiragana & Katakana", faFont, new LearnKanaMode());
    public static NUMBERS = new Topic("Numbers & Counting", faYenSign, new LearnKanaMode());
    public static KANJI = new Topic("Jōyō Kanji", faPaintBrush, new LearnKanjiMode());
    public static BASICS = new Topic("Basics", faAppleAlt, new LearnBasicsMode());
    public static CALENDAR = new Topic("Days & Months", faCalendarAlt, new LearnCalendarMode());

    public static ALL: Topic[] = [Topic.KANA, Topic.NUMBERS, Topic.KANJI, Topic.BASICS, Topic.CALENDAR];

    private constructor(name: string, icon: IconDefinition, modes: LearnMenuModes) {
        this._name = name;
        this._icon = icon;
        this._modes = modes;
    }

    get name(): string {
        return this._name;
    }

    get icon(): IconDefinition {
        return this._icon;
    }

    get modes(): LearnMenuModes {
        return this._modes;
    }
}