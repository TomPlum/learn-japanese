import { KyoikuGrade } from "../kanji/KyoikuGrade";
import { ModeSettings } from "./GameSettings";
import Topic from "../Topic";

export default class DataSettings {
    private readonly _topic: Topic;
    private readonly _quantity: number | undefined;

    protected constructor(topic: Topic, quantity?: number) {
        this._topic = topic;
        this._quantity = quantity;
    }

    get topic(): Topic {
        return this._topic;
    }

    get quantity(): number | undefined {
        return this._quantity;
    }
}

/**
 * Learn specific settings might be added in future.
 * E.g Hints
 */
export class LearnSettings implements ModeSettings {
    constructor() {
    }
}

export class KanaSettings extends DataSettings {
    private readonly _hiragana: boolean;
    private readonly _katakana: boolean;
    private readonly _diagraphs: boolean;
    private readonly _diacriticals: boolean;

    constructor(hiragana: boolean, katakana: boolean, diagraphs: boolean, diacriticals: boolean, quantity?: number) {
        super(Topic.KANA, quantity)
        this._hiragana = hiragana;
        this._katakana = katakana;
        this._diagraphs = diagraphs;
        this._diacriticals = diacriticals;
    }

    get hiragana(): boolean {
        return this._hiragana;
    }

    get katakana(): boolean {
        return this._katakana;
    }

    get diagraphs(): boolean {
        return this._diagraphs;
    }

    get diacriticals(): boolean {
        return this._diacriticals;
    }
}

export class KanaSettingsBuilder {
    private _hiragana: boolean = false;
    private _katakana: boolean = false;
    private _diagraphs: boolean = false;
    private _diacriticals: boolean = false;
    private _quantity: number | undefined = 50;

    withHiragana(include: boolean = true): KanaSettingsBuilder {
        this._hiragana = include;
        return this;
    }

    withKatakana(include: boolean = true): KanaSettingsBuilder {
        this._katakana = include;
        return this;
    }

    withDiagraphs(include: boolean = true): KanaSettingsBuilder {
        this._diagraphs = include;
        return this;
    }

    withDiacriticals(include: boolean = true): KanaSettingsBuilder {
        this._diacriticals = include;
        return this;
    }

    withQuantity(quantity: number): KanaSettingsBuilder {
        this._quantity = quantity;
        return this;
    }

    withMaxQuantity(): KanaSettingsBuilder {
        this._quantity = undefined;
        return this;
    }

    withEverything(): KanaSettingsBuilder {
        this._hiragana = true;
        this._katakana = true;
        this._diacriticals = true;
        this._diagraphs = true;
        return this;
    }

    build(): KanaSettings {
        return new KanaSettings(this._hiragana, this._katakana, this._diagraphs, this._diacriticals, this._quantity);
    }
}

export class KanjiSettings extends DataSettings {
    private readonly _grades: KyoikuGrade[];
    private readonly _joyo: boolean;
    private readonly _tags: string[]

    constructor(grades: KyoikuGrade[], joyo: boolean, tags: string[], quantity?: number) {
        super(Topic.KANJI, quantity);
        this._grades = grades;
        this._joyo = joyo;
        this._tags = tags;
    }

    get grades(): KyoikuGrade[] {
        return this._grades;
    }

    get joyo(): boolean {
        return this._joyo;
    }

    get tags(): string[] {
        return this._tags;
    }
}

export class KanjiSettingsBuilder {
    private _grades: KyoikuGrade[] = [];
    private _joyo: boolean = false;
    private _tags: string[] = [];
    private _quantity: number | undefined;

    withGrades(grades: KyoikuGrade[]): KanjiSettingsBuilder {
        this._grades = grades;
        return this;
    }

    withJoyoKanji(include: boolean = true): KanjiSettingsBuilder {
        this._joyo = include;
        return this;
    }

    withTags(tags: string[]): KanjiSettingsBuilder {
        this._tags = tags;
        return this;
    }

    withQuantity(quantity?: number): KanjiSettingsBuilder {
        this._quantity = quantity;
        return this;
    }

    build(): KanjiSettings {
        return new KanjiSettings(this._grades, this._joyo, this._tags, this._quantity);
    }
}

export class CalendarSettings extends DataSettings {
    private readonly _days: boolean;
    private readonly _months: boolean;
    private readonly _season: boolean;
    private readonly _nouns: boolean;
    private readonly _phrases: boolean;

    constructor(days: boolean, months: boolean, season: boolean, nouns: boolean, phrases: boolean, quantity?: number) {
        super(Topic.CALENDAR, quantity);
        this._days = days;
        this._months = months;
        this._season = season;
        this._nouns = nouns;
        this._phrases = phrases;
    }

    get days(): boolean {
        return this._days;
    }

    get months(): boolean {
        return this._months;
    }

    get season(): boolean {
        return this._season;
    }

    get nouns(): boolean {
        return this._nouns;
    }

    get phrases(): boolean {
        return this._phrases;
    }
}

export class CalendarSettingsBuilder {
    private _days: boolean = false;
    private _months: boolean = false;
    private _season: boolean = false;
    private _nouns: boolean = false;
    private _phrases: boolean = false;
    private _quantity: number | undefined;

    withDays(include = true): CalendarSettingsBuilder {
        this._days = include;
        return this;
    }

    withMonths(include = true): CalendarSettingsBuilder {
        this._months = include;
        return this;
    }

    withSeasons(include = true): CalendarSettingsBuilder {
        this._season = include;
        return this;
    }

    withTemporalNouns(include = true): CalendarSettingsBuilder {
        this._nouns = include;
        return this;
    }

    withPhrases(include = true): CalendarSettingsBuilder {
        this._phrases = include;
        return this;
    }

    withQuantity(quantity: number): CalendarSettingsBuilder {
        this._quantity = quantity;
        return this;
    }

    build(): CalendarSettings {
        return new CalendarSettings(this._days, this._months, this._season, this._nouns, this._phrases, this._quantity);
    }
}

export class BasicsSettings extends DataSettings {
    private readonly _colours: boolean;
    private readonly _animals: boolean;
    private readonly _directions: boolean;
    private readonly _weather: boolean;
    private readonly _family: boolean;
    private readonly _body: boolean;

    constructor(colours: boolean, animals: boolean, directions: boolean, weather: boolean, family: boolean, body: boolean, quantity?: number) {
        super(Topic.BASICS, quantity);
        this._colours = colours;
        this._animals = animals;
        this._directions = directions;
        this._weather = weather;
        this._family = family;
        this._body = body;
    }

    get colours(): boolean {
        return this._colours;
    }

    get animals(): boolean {
        return this._animals;
    }

    get directions(): boolean {
        return this._directions;
    }

    get weather(): boolean {
        return this._weather;
    }

    get family(): boolean {
        return this._family;
    }

    get body(): boolean {
        return this._body;
    }
}

export class BasicsSettingsBuilder {
    private _colours: boolean = false;
    private _animals: boolean = false;
    private _directions: boolean = false;
    private _weather: boolean = false;
    private _family: boolean = false;
    private _body: boolean = false;
    private _quantity: number | undefined;

    withColours(include: boolean = true): BasicsSettingsBuilder {
        this._colours = include;
        return this;
    }

    withAnimals(include: boolean = true): BasicsSettingsBuilder {
        this._animals = include;
        return this;
    }

    withDirections(include: boolean = true): BasicsSettingsBuilder {
        this._directions = include;
        return this;
    }

    withWeather(include: boolean = true): BasicsSettingsBuilder {
        this._weather = include;
        return this;
    }

    withFamily(include: boolean = true): BasicsSettingsBuilder {
        this._family = include;
        return this;
    }

    withBody(include: boolean = true): BasicsSettingsBuilder {
        this._body = include;
        return this;
    }

    withQuantity(quantity: number): BasicsSettingsBuilder {
        this._quantity = quantity;
        return this;
    }

    build(): BasicsSettings {
        return new BasicsSettings(this._colours, this._animals, this._directions, this._weather, this._family, this._body, this._quantity);
    }

}

export class NumbersSettings extends DataSettings {
    private readonly _numbers: boolean;
    private readonly _counters: boolean;
    private readonly _age: boolean;
    private readonly _exceptions: boolean;
    private readonly _units: boolean;
    private readonly _sequence: boolean;

    constructor(numbers: boolean, counters: boolean, age: boolean, exceptions: boolean, units: boolean, sequence: boolean, quantity?: number) {
        super(Topic.NUMBERS, quantity);
        this._numbers = numbers;
        this._counters = counters;
        this._age = age;
        this._exceptions = exceptions;
        this._units = units;
        this._sequence = sequence;
    }
    
    get numbers(): boolean {
        return this._numbers;
    }

    get counters(): boolean {
        return this._counters;
    }

    get age(): boolean {
        return this._age;
    }

    get exceptions(): boolean {
        return this._exceptions;
    }

    get units(): boolean {
        return this._units;
    }

    get sequence(): boolean {
        return this._sequence;
    }
}

export class NumbersSettingsBuilder {
    private _numbers: boolean = false;
    private _counters: boolean = false;
    private _age: boolean = false;
    private _exceptions: boolean = false;
    private _units: boolean = false;
    private _sequence: boolean = false;
    private _quantity: number | undefined;

    withNumbers(include: boolean = true): NumbersSettingsBuilder {
        this._numbers = include;
        return this;
    }

    withCounters(include: boolean = true): NumbersSettingsBuilder {
        this._counters = include;
        return this;
    }

    withAge(include: boolean = true): NumbersSettingsBuilder {
        this._age = include;
        return this;
    }

    withExceptions(include: boolean = true): NumbersSettingsBuilder {
        this._exceptions = include;
        return this;
    }

    withUnits(include: boolean = true): NumbersSettingsBuilder {
        this._units = include;
        return this;
    }

    withSequence(include: boolean = true): NumbersSettingsBuilder {
        this._sequence = include;
        return this;
    }

    withQuantity(quantity: number): NumbersSettingsBuilder {
        this._quantity = quantity;
        return this;
    }

    build(): NumbersSettings {
        return new NumbersSettings(this._numbers, this._counters, this._age, this._exceptions, this._units, this._sequence, this._quantity);
    }
}

export class SentenceStructureSettings extends DataSettings {
    private readonly _adverbs: boolean;
    private readonly _particles: boolean;
    private readonly _expressions: boolean;
    private readonly _verbs: boolean;
    private readonly _nouns: boolean;
    private readonly _adjectives: boolean;

    constructor(adverbs: boolean, particles: boolean, expressions: boolean, verbs: boolean, nouns: boolean, adjectives: boolean, quantity?: number) {
        super(Topic.GRAMMAR, quantity);
        this._adverbs = adverbs;
        this._particles = particles;
        this._expressions = expressions;
        this._verbs = verbs;
        this._nouns = nouns;
        this._adjectives = adjectives;
    }

    get adverbs(): boolean {
        return this._adverbs;
    }

    get particles(): boolean {
        return this._particles;
    }

    get expressions(): boolean {
        return this._expressions;
    }

    get verbs(): boolean {
        return this._verbs;
    }

    get nouns(): boolean {
        return this._nouns;
    }

    get adjectives(): boolean {
        return this._adjectives;
    }
}

export class SentenceStructureSettingsBuilder {
    private _adverbs: boolean = false;
    private _particles: boolean = false;
    private _expressions: boolean = false;
    private _verbs: boolean = false;
    private _nouns: boolean = false;
    private _adjectives: boolean = false;
    private _quantity: number | undefined;

    withAdverbs(include: boolean = true): SentenceStructureSettingsBuilder {
        this._adverbs = include;
        return this;
    }

    withParticles(include: boolean = true): SentenceStructureSettingsBuilder {
        this._particles = include;
        return this;
    }

    withExpressions(include: boolean = true): SentenceStructureSettingsBuilder {
        this._expressions = include;
        return this;
    }

    withVerbs(include: boolean = true): SentenceStructureSettingsBuilder {
        this._verbs = include;
        return this;
    }

    withNouns(include: boolean = true): SentenceStructureSettingsBuilder {
        this._nouns = include;
        return this;
    }

    withAdjectives(include: boolean = true): SentenceStructureSettingsBuilder {
        this._adjectives = include;
        return this;
    }

    withQuantity(quantity: number): SentenceStructureSettingsBuilder {
        this._quantity = quantity;
        return this;
    }

    build(): SentenceStructureSettings {
        return new SentenceStructureSettings(this._adverbs, this._particles, this._expressions, this._verbs, this._nouns, this._adjectives, this._quantity);
    }

}