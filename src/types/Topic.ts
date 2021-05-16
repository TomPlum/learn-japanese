import { faAppleAlt, faCalendarAlt, faFont, faPaintBrush, faSpellCheck, faYenSign, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import LearnMenuModes from "./learn/mode/LearnMenuModes";
import LearnKanaMode from "./learn/mode/LearnKanaMode";
import LearnKanjiMode from "./learn/mode/LearnKanjiMode";
import LearnBasicsMode from "./learn/mode/LearnBasicsMode";
import LearnCalendarMode from "./learn/mode/LearnCalendarMode";
import { CardProps } from "../components/learn/FlashCard";
import KanaFlashCardFront from "../components/learn/kana/KanaFlashCardFront";
import KanaFlashCardBack from "../components/learn/kana/KanaFlashCardBack";
import KanjiFlashCardFront from "../components/learn/kanji/KanjiFlashCardFront";
import KanjiFlashCardBack from "../components/learn/kanji/KanjiFlashCardBack";
import BasicsFlashCardFront from "../components/learn/basics/BasicsFlashCardFront";
import BasicsFlashCardBack from "../components/learn/basics/BasicsFlashCardBack";
import LearnSentenceStructureMode from "./learn/mode/LearnSentenceStructureMode";
import LearnNumbersMode from "./learn/mode/LearnNumbersMode";
import NumbersFlashCardFront from "../components/learn/numbers/NumbersFlashCardFront";
import NumbersFlashCardBack from "../components/learn/numbers/NumbersFlashCardBack";
import SentenceStructureFlashCardFront from "../components/learn/sentence/SentenceStructureFlashCardFront";
import SentenceStructureFlashCardBack from "../components/learn/sentence/SentenceStructureFlashCardBack";

export default class Topic {
    private readonly _name: string;
    private readonly _icon: IconDefinition;
    private readonly _modes: LearnMenuModes;
    private readonly _cards: CardProps;

    public static KANA = new Topic(
        "Hiragana & Katakana", faFont, new LearnKanaMode(),
        { front: KanaFlashCardFront, back: KanaFlashCardBack }
    );

    public static NUMBERS = new Topic(
        "Numbers & Counting", faYenSign, new LearnNumbersMode(),
        { front: NumbersFlashCardFront, back: NumbersFlashCardBack }
    );

    public static KANJI = new Topic(
        "Jōyō Kanji", faPaintBrush, new LearnKanjiMode(),
        { front: KanjiFlashCardFront, back: KanjiFlashCardBack }
    );

    public static BASICS = new Topic(
        "Basics", faAppleAlt, new LearnBasicsMode(),
        { front: BasicsFlashCardFront, back: BasicsFlashCardBack }
    );

    public static CALENDAR = new Topic(
        "Days & Months", faCalendarAlt, new LearnCalendarMode(),
        { front: SentenceStructureFlashCardFront, back: SentenceStructureFlashCardBack }
    );

    public static GRAMMAR = new Topic(
        "Sentence Structure", faSpellCheck, new LearnSentenceStructureMode(),
        { front: SentenceStructureFlashCardFront, back: SentenceStructureFlashCardBack }
    );

    public static ALL: Topic[] = [Topic.KANA, Topic.NUMBERS, Topic.KANJI, Topic.BASICS, Topic.CALENDAR, Topic.GRAMMAR];

    private constructor(name: string, icon: IconDefinition, modes: LearnMenuModes, cards: CardProps) {
        this._name = name;
        this._icon = icon;
        this._modes = modes;
        this._cards = cards;
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

    get cards(): CardProps {
        return this._cards;
    }
}