import { faAppleAlt, faCalendarAlt, faFont, faPaintBrush, faSpellCheck, faYenSign, IconDefinition } from "@fortawesome/free-solid-svg-icons";
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
import PlayKanjiModes from "./game/mode/PlayKanjiModes";
import PlayKanaMode from "./game/mode/PlayKanaMode";
import { MenuModes } from "./MenuModes";

export default class Topic {
    private readonly _name: string;
    private readonly _icon: IconDefinition;
    private readonly _modes: MenuModes;
    private readonly _playModes: MenuModes;
    private readonly _cards: CardProps;

    public static KANA = new Topic(
        "Hiragana & Katakana", faFont, new LearnKanaMode(), new PlayKanaMode(),
        { front: KanaFlashCardFront, back: KanaFlashCardBack }
    );

    public static NUMBERS = new Topic(
        "Numbers & Counting", faYenSign, new LearnNumbersMode(), new PlayKanjiModes(),
        { front: NumbersFlashCardFront, back: NumbersFlashCardBack }
    );

    public static KANJI = new Topic(
        "Jōyō Kanji", faPaintBrush, new LearnKanjiMode(), new PlayKanjiModes(),
        { front: KanjiFlashCardFront, back: KanjiFlashCardBack }
    );

    public static BASICS = new Topic(
        "Basics", faAppleAlt, new LearnBasicsMode(), new PlayKanjiModes(),
        { front: BasicsFlashCardFront, back: BasicsFlashCardBack }
    );

    public static CALENDAR = new Topic(
        "Days & Months", faCalendarAlt, new LearnCalendarMode(), new PlayKanjiModes(),
        { front: SentenceStructureFlashCardFront, back: SentenceStructureFlashCardBack }
    );

    public static GRAMMAR = new Topic(
        "Sentence Structure", faSpellCheck, new LearnSentenceStructureMode(), new PlayKanjiModes(),
        { front: SentenceStructureFlashCardFront, back: SentenceStructureFlashCardBack }
    );

    public static ALL: Topic[] = [Topic.KANA, Topic.NUMBERS, Topic.KANJI, Topic.BASICS, Topic.CALENDAR, Topic.GRAMMAR];

    private constructor(name: string, icon: IconDefinition, modes: MenuModes, playModes: MenuModes, cards: CardProps) {
        this._name = name;
        this._icon = icon;
        this._modes = modes;
        this._playModes = playModes;
        this._cards = cards;
    }

    get name(): string {
        return this._name;
    }

    get icon(): IconDefinition {
        return this._icon;
    }

    get modes(): MenuModes {
        return this._modes;
    }

    get cards(): CardProps {
        return this._cards;
    }

    get playModes(): MenuModes {
        return this._playModes;
    }
}