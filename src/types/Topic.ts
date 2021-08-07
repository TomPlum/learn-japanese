import { faAppleAlt, faCalendarAlt, faFont, faPaintBrush, faSpellCheck, faYenSign, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import LearnNumbersModes from "./learn/mode/LearnNumbersModes";
import LearnKanjiModes from "./learn/mode/LearnKanjiModes";
import LearnBasicsModes from "./learn/mode/LearnBasicsModes";
import LearnCalendarModes from "./learn/mode/LearnCalendarModes";
import { CardProps } from "../components/learn/FlashCard";
import KanaFlashCardFront from "../components/learn/kana/KanaFlashCardFront";
import KanaFlashCardBack from "../components/learn/kana/KanaFlashCardBack";
import KanjiFlashCardFront from "../components/learn/kanji/KanjiFlashCardFront";
import KanjiFlashCardBack from "../components/learn/kanji/KanjiFlashCardBack";
import BasicsFlashCardFront from "../components/learn/basics/BasicsFlashCardFront";
import BasicsFlashCardBack from "../components/learn/basics/BasicsFlashCardBack";
import LearnSentenceStructureModes from "./learn/mode/LearnSentenceStructureModes";
import NumbersFlashCardFront from "../components/learn/numbers/NumbersFlashCardFront";
import NumbersFlashCardBack from "../components/learn/numbers/NumbersFlashCardBack";
import SentenceStructureFlashCardFront from "../components/learn/sentence/SentenceStructureFlashCardFront";
import SentenceStructureFlashCardBack from "../components/learn/sentence/SentenceStructureFlashCardBack";
import PlayKanjiModes from "./game/mode/PlayKanjiModes";
import PlayKanaModes from "./game/mode/PlayKanaModes";
import { LearnMenuModes, PlayMenuModes } from "./MenuModes";
import LearnKanaModes from "./learn/mode/LearnKanaModes";
import PlaySentenceStructureModes from "./game/mode/PlaySentenceStructureModes";
import React from "react";
import KanaSettingsForm from "../components/settings/data/KanaSettingsForm";
import KanjiSettingsForm from "../components/settings/data/KanjiSettingsForm";
import SentenceStructureForm from "../components/settings/data/SentenceStructureForm";
import PlayBasicsModes from "./game/mode/PlayBasicsModes";
import PlayCalendarModes from "./game/mode/PlayCalendarModes";

export default class Topic {
    private readonly _name: string;
    private readonly _icon: IconDefinition;
    private readonly _modes: LearnMenuModes;
    private readonly _playModes: PlayMenuModes;
    private readonly _cards: CardProps;
    private readonly _menu: React.FunctionComponent | React.ComponentClass<any> | undefined;

    public static KANA = new Topic(
        "Hiragana & Katakana", faFont, new LearnKanaModes(), new PlayKanaModes(),
        { front: KanaFlashCardFront, back: KanaFlashCardBack },
        KanaSettingsForm
    );

    public static NUMBERS = new Topic(
        "Numbers & Counting", faYenSign, new LearnNumbersModes(), new PlayKanjiModes(),
        { front: NumbersFlashCardFront, back: NumbersFlashCardBack }
    );

    public static KANJI = new Topic(
        "Jōyō Kanji", faPaintBrush, new LearnKanjiModes(), new PlayKanjiModes(),
        { front: KanjiFlashCardFront, back: KanjiFlashCardBack },
        KanjiSettingsForm
    );

    public static BASICS = new Topic(
        "Basics", faAppleAlt, new LearnBasicsModes(), new PlayBasicsModes(),
        { front: BasicsFlashCardFront, back: BasicsFlashCardBack }
    );

    public static CALENDAR = new Topic(
        "Days & Months", faCalendarAlt, new LearnCalendarModes(), new PlayCalendarModes(),
        { front: SentenceStructureFlashCardFront, back: SentenceStructureFlashCardBack }
    );

    public static GRAMMAR = new Topic(
        "Sentence Structure", faSpellCheck, new LearnSentenceStructureModes(), new PlaySentenceStructureModes(),
        { front: SentenceStructureFlashCardFront, back: SentenceStructureFlashCardBack },
        SentenceStructureForm
    );

    public static ALL: Topic[] = [Topic.KANA, Topic.NUMBERS, Topic.KANJI, Topic.BASICS, Topic.CALENDAR, Topic.GRAMMAR];

    private constructor(name: string, icon: IconDefinition, modes: LearnMenuModes, playModes: PlayMenuModes,
                        cards: CardProps, menu: React.FunctionComponent | React.ComponentClass<any> | undefined = undefined) {
        this._name = name;
        this._icon = icon;
        this._modes = modes;
        this._playModes = playModes;
        this._cards = cards;
        this._menu = menu;
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

    get playModes(): PlayMenuModes {
        return this._playModes;
    }

    get menu(): React.FunctionComponent | React.ComponentClass<any> | undefined {
        return this._menu;
    }
}
