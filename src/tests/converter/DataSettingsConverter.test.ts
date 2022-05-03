import { KanaSettingsBuilder } from "../../domain/session/settings/data/KanaSettings";
import DataSettingsConverter from "../../converter/DataSettingsConverter";
import { KanjiSettingsBuilder } from "../../domain/session/settings/data/KanjiSettings";
import { KyoikuGrade } from "../../domain/kanji/KyoikuGrade";
import { NumbersSettingsBuilder } from "../../domain/session/settings/data/NumbersSettings";
import { SentenceStructureSettingsBuilder } from "../../domain/session/settings/data/SentenceStructureSettings";
import { CalendarSettingsBuilder } from "../../domain/session/settings/data/CalendarSettings";
import { BasicsSettingsBuilder } from "../../domain/session/settings/data/BasicsSettings";
import DataSettings from "../../domain/session/settings/data/DataSettings";
import Topic from "../../domain/Topic";
import { KanaDataSettingsState, KanjiDataSettingsState, NumbersDataSettingsState, SentenceStructureDataSettingsState, CalenderDataSettingsState, BasicsDataSettingsState, DataSettingsState } from "../../slices/DataSettingsSlice";
import { BasicsDataSettingsResponse, CalenderDataSettingsResponse, KanaDataSettingsResponse, KanjiDataSettingsResponse, NumbersDataSettingsResponse, SentenceStructureDataSettingsResponse } from "../../repository/PresetRepository";

describe("Data Settings Converter", () => {

    const converter = new DataSettingsConverter();

    describe("Convert API Request", () => {
        it("Should convert valid kana settings", () => {
            const settings = new KanaSettingsBuilder()
                .withHiragana(true)
                .withKatakana(false)
                .withDiagraphs(false)
                .withDiacriticals(true)
                .withOnlyDiagraphs(false)
                .withQuantity(50)
                .build();

            const serialised = converter.convertRequest(settings);

            expect(serialised).toStrictEqual({
                quantity: 50,
                config: {
                    regular: true,
                    hiragana: true,
                    katakana: false,
                    diagraphs: false,
                    diacriticals: true,
                    onlyDiagraphs: false,
                }
            });
        });

        it("Should convert valid kanji settings", () => {
            const settings = new KanjiSettingsBuilder()
                .withTags(["number", "animal"])
                .withQuantity(75)
                .withJoyoKanji(false)
                .withGrades([KyoikuGrade.ONE, KyoikuGrade.THREE])
                .build();

            const serialised = converter.convertRequest(settings);

            expect(serialised).toStrictEqual({
                quantity: 75,
                config: {
                    tags: ["number", "animal"],
                    grades: [1, 3],
                }
            });
        });

        it("Should convert valid numbers settings", () => {
            const settings = new NumbersSettingsBuilder()
                .withQuantity(60)
                .withNumbers(true)
                .withAge(false)
                .withUnits(true)
                .withSequence(false)
                .withCounters(true)
                .withExceptions(false)
                .build();

            const serialised = converter.convertRequest(settings);

            expect(serialised).toStrictEqual({
                quantity: 60,
                config: {
                    numbers: true,
                    counters: true,
                    age: false,
                    exceptions: false,
                    units: true,
                    sequence: false
                }
            });
        });

        it("Should convert valid sentence structure settings", () => {
            const settings = new SentenceStructureSettingsBuilder()
                .withQuantity(25)
                .withVerbs(false)
                .withNouns(true)
                .withParticles(false)
                .withAdverbs(true)
                .withAdjectives(false)
                .withExpressions(true)
                .build();

            const serialised = converter.convertRequest(settings);

            expect(serialised).toStrictEqual({
                quantity: 25,
                config: {
                    adverbs: true,
                    particles: false,
                    expressions: true,
                    verbs: false,
                    nouns: true,
                    adjectives: false
                }
            });
        });

        it("Should convert valid calendar settings", () => {
            const settings = new CalendarSettingsBuilder()
                .withQuantity(75)
                .withTemporalNouns(false)
                .withSeasons(true)
                .withDays(false)
                .withMonths(true)
                .withPhrases(false)
                .withTemporalNouns(true)
                .build();

            const serialised = converter.convertRequest(settings);

            expect(serialised).toStrictEqual({
                quantity: 75,
                config: {
                    days: false,
                    months: true,
                    seasons: true,
                    nouns: true,
                    phrases: false
                }
            });
        });

        it("Should convert valid basics settings", () => {
            const settings = new BasicsSettingsBuilder()
                .withQuantity(10)
                .withWeather(false)
                .withBody(true)
                .withDirections(false)
                .withFamily(true)
                .withColours(false)
                .withAnimals(true)
                .build();

            const serialised = converter.convertRequest(settings);

            expect(serialised).toStrictEqual({
                quantity: 10,
                config: {
                    colours: false,
                    animals: true,
                    directions: false,
                    weather: false,
                    family: true,
                    body: true
                }
            });
        });

        it("Should throw an exception if an invalid instance is encountered", () => {
            const settings = new UnknownSettings(50);
            expect(() => converter.convertRequest(settings)).toThrow("Unknown DataSettings Type [UnknownSettings]");
        });

        class UnknownSettings extends DataSettings {
            constructor(quantity: number) {
                super(Topic.KANJI, quantity);
            }
        }
    });

    describe("Convert API Response", () => {
        it("Should convert valid kana response", () => {
            const response: KanaDataSettingsResponse = {
                regular: true,
                hiragana: true,
                katakana: false,
                diagraphs: false,
                diacriticals: true,
                onlyDiagraphs: false
            };

            const deserialised = converter.convert(Topic.KANA, { quantity: 50, config: response });

            expect(deserialised).toStrictEqual(
                new KanaSettingsBuilder()
                    .withHiragana(true)
                    .withKatakana(false)
                    .withDiagraphs(false)
                    .withDiacriticals(true)
                    .withOnlyDiagraphs(false)
                    .withQuantity(50)
                    .build()
            );
        });

        it("Should convert valid kanji response", () => {
            const response: KanjiDataSettingsResponse = { tags: ["number", "animal"], grades: [1, 3] };

            const deserialised = converter.convert(Topic.KANJI, { quantity: 75, config: response });

            expect(deserialised).toStrictEqual(
                new KanjiSettingsBuilder()
                    .withTags(["number", "animal"])
                    .withQuantity(75)
                    .withJoyoKanji(false)
                    .withGrades([KyoikuGrade.ONE, KyoikuGrade.THREE])
                    .build()
            );
        });

        it("Should convert valid numbers response", () => {
            const state: NumbersDataSettingsResponse = {
                numbers: true,
                counters: true,
                age: false,
                exceptions: false,
                units: true,
                sequence: false
            };

            const deserialised = converter.convert(Topic.NUMBERS, { quantity: 60, config: state });

            expect(deserialised).toStrictEqual(
                new NumbersSettingsBuilder()
                    .withQuantity(60)
                    .withNumbers(true)
                    .withAge(false)
                    .withUnits(true)
                    .withSequence(false)
                    .withCounters(true)
                    .withExceptions(false)
                    .build()
            );
        });

        it("Should convert valid sentence structure response", () => {
            const response: SentenceStructureDataSettingsResponse = {
                adverbs: true,
                particles: false,
                expressions: true,
                verbs: false,
                nouns: true,
                adjectives: false
            };

            const deserialised = converter.convert(Topic.GRAMMAR, { quantity: 25, config: response });

            expect(deserialised).toStrictEqual(
                new SentenceStructureSettingsBuilder()
                    .withQuantity(25)
                    .withVerbs(false)
                    .withNouns(true)
                    .withParticles(false)
                    .withAdverbs(true)
                    .withAdjectives(false)
                    .withExpressions(true)
                    .build()
            );
        });

        it("Should convert valid calendar response", () => {
            const response: CalenderDataSettingsResponse = {
                days: false,
                months: true,
                seasons: true,
                nouns: true,
                phrases: false
            };

            const deserialised = converter.convert(Topic.CALENDAR, { quantity: 75, config: response });

            expect(deserialised).toStrictEqual(
                new CalendarSettingsBuilder()
                    .withQuantity(75)
                    .withTemporalNouns(false)
                    .withSeasons(true)
                    .withDays(false)
                    .withMonths(true)
                    .withPhrases(false)
                    .withTemporalNouns(true)
                    .build()
            );
        });

        it("Should convert valid basics response", () => {
            const response: BasicsDataSettingsResponse = {
                colours: false,
                animals: true,
                directions: false,
                weather: false,
                family: true,
                body: true
            };

            const deserialised = converter.convert(Topic.BASICS, { quantity: 10, config: response });

            expect(deserialised).toStrictEqual(
                new BasicsSettingsBuilder()
                    .withQuantity(10)
                    .withWeather(false)
                    .withBody(true)
                    .withDirections(false)
                    .withFamily(true)
                    .withColours(false)
                    .withAnimals(true)
                    .build()
            );
        });

        it.skip("Should throw an exception if an invalid topic is passed", () => {
            // TODO: Figure out a way to pass in a fake enum entry to hit the default switch branch
            expect(() => converter.convert(Topic.GRAMMAR, { quantity: 10, config: { }})).toThrow(
                "Invalid DataSettingsState Object [{\"topic\":\"Topic\",\"quantity\":10,\"invalid\":\"broken\"}]"
            );
        });
    });

    describe("Serialise", () => {
        it("Should convert valid kana settings", () => {
            const settings = new KanaSettingsBuilder()
                .withHiragana(true)
                .withKatakana(false)
                .withDiagraphs(false)
                .withDiacriticals(true)
                .withOnlyDiagraphs(false)
                .withQuantity(50)
                .build();

            const serialised = converter.serialise(settings);

            expect(serialised).toStrictEqual({
                quantity: 50,
                regular: true,
                hiragana: true,
                katakana: false,
                diagraphs: false,
                diacriticals: true,
                onlyDiagraphs: false,
                topic: "Hiragana & Katakana"
            });
        });

        it("Should convert valid kanji settings", () => {
            const settings = new KanjiSettingsBuilder()
                .withTags(["number", "animal"])
                .withQuantity(75)
                .withJoyoKanji(false)
                .withGrades([KyoikuGrade.ONE, KyoikuGrade.THREE])
                .build();

            const serialised = converter.serialise(settings);

            expect(serialised).toStrictEqual({
                tags: ["number", "animal"],
                topic: "Jōyō Kanji",
                grades: [1, 3],
                quantity: 75
            });
        });

        it("Should convert valid numbers settings", () => {
            const settings = new NumbersSettingsBuilder()
                .withQuantity(60)
                .withNumbers(true)
                .withAge(false)
                .withUnits(true)
                .withSequence(false)
                .withCounters(true)
                .withExceptions(false)
                .build();

            const serialised = converter.serialise(settings);

            expect(serialised).toStrictEqual({
                topic: "Numbers & Counting",
                quantity: 60,
                numbers: true,
                counters: true,
                age: false,
                exceptions: false,
                units: true,
                sequence: false
            });
        });

        it("Should convert valid sentence structure settings", () => {
            const settings = new SentenceStructureSettingsBuilder()
                .withQuantity(25)
                .withVerbs(false)
                .withNouns(true)
                .withParticles(false)
                .withAdverbs(true)
                .withAdjectives(false)
                .withExpressions(true)
                .build();

            const serialised = converter.serialise(settings);

            expect(serialised).toStrictEqual({
                topic: "Sentence Structure",
                quantity: 25,
                adverbs: true,
                particles: false,
                expressions: true,
                verbs: false,
                nouns: true,
                adjectives: false
            });
        });

        it("Should convert valid calendar settings", () => {
            const settings = new CalendarSettingsBuilder()
                .withQuantity(75)
                .withTemporalNouns(false)
                .withSeasons(true)
                .withDays(false)
                .withMonths(true)
                .withPhrases(false)
                .withTemporalNouns(true)
                .build();

            const serialised = converter.serialise(settings);

            expect(serialised).toStrictEqual({
                topic: "Days & Months",
                quantity: 75,
                days: false,
                months: true,
                seasons: true,
                nouns: true,
                phrases: false
            });
        });

        it("Should convert valid basics settings", () => {
            const settings = new BasicsSettingsBuilder()
                .withQuantity(10)
                .withWeather(false)
                .withBody(true)
                .withDirections(false)
                .withFamily(true)
                .withColours(false)
                .withAnimals(true)
                .build();

            const serialised = converter.serialise(settings);

            expect(serialised).toStrictEqual({
                topic: "Basics",
                quantity: 10,
                colours: false,
                animals: true,
                directions: false,
                weather: false,
                family: true,
                body: true
            });
        });

        it("Should throw an exception if an invalid instance is encountered", () => {
            const settings = new UnknownSettings(50);
            expect(() => converter.serialise(settings)).toThrow("Unknown DataSettings Type [UnknownSettings]");
        });

        class UnknownSettings extends DataSettings {
            constructor(quantity: number) {
                super(Topic.KANJI, quantity);
            }
        }
    });

    describe("De-Serialise", () => {
        it("Should convert valid kana state", () => {
            const state: KanaDataSettingsState = {
                quantity: 50,
                regular: true,
                hiragana: true,
                katakana: false,
                diagraphs: false,
                diacriticals: true,
                onlyDiagraphs: false,
                topic: "Hiragana & Katakana"
            };

            const deserialised = converter.deserialise(state);

            expect(deserialised).toStrictEqual(
                new KanaSettingsBuilder()
                    .withHiragana(true)
                    .withKatakana(false)
                    .withDiagraphs(false)
                    .withDiacriticals(true)
                    .withOnlyDiagraphs(false)
                    .withQuantity(50)
                    .build()
            );
        });

        it("Should convert valid kanji state", () => {
            const state: KanjiDataSettingsState = {
                tags: ["number", "animal"],
                topic: "Jōyō Kanji",
                grades: [1, 3],
                quantity: 75
            };

            const deserialised = converter.deserialise(state);

            expect(deserialised).toStrictEqual(
                new KanjiSettingsBuilder()
                    .withTags(["number", "animal"])
                    .withQuantity(75)
                    .withJoyoKanji(false)
                    .withGrades([KyoikuGrade.ONE, KyoikuGrade.THREE])
                    .build()
            );
        });

        it("Should convert valid numbers state", () => {
            const state: NumbersDataSettingsState = {
                topic: "Numbers & Counting",
                quantity: 60,
                numbers: true,
                counters: true,
                age: false,
                exceptions: false,
                units: true,
                sequence: false
            };

            const deserialised = converter.deserialise(state);

            expect(deserialised).toStrictEqual(
                new NumbersSettingsBuilder()
                    .withQuantity(60)
                    .withNumbers(true)
                    .withAge(false)
                    .withUnits(true)
                    .withSequence(false)
                    .withCounters(true)
                    .withExceptions(false)
                    .build()
            );
        });

        it("Should convert an undefined quantity to 0 for numbers settings state", () => {
            const state: NumbersDataSettingsState = {
                topic: "Numbers & Counting",
                quantity: undefined,
                numbers: true,
                counters: true,
                age: false,
                exceptions: false,
                units: true,
                sequence: false
            };

            const deserialised = converter.deserialise(state);

            expect(deserialised.quantity).toBe(0);
        });

        it("Should convert valid sentence structure state", () => {
            const state: SentenceStructureDataSettingsState = {
                topic: "Sentence Structure",
                quantity: 25,
                adverbs: true,
                particles: false,
                expressions: true,
                verbs: false,
                nouns: true,
                adjectives: false
            };

            const deserialised = converter.deserialise(state);

            expect(deserialised).toStrictEqual(
                new SentenceStructureSettingsBuilder()
                    .withQuantity(25)
                    .withVerbs(false)
                    .withNouns(true)
                    .withParticles(false)
                    .withAdverbs(true)
                    .withAdjectives(false)
                    .withExpressions(true)
                    .build()
            );
        });

        it("Should convert an undefined quantity to 0 for sentence structure state", () => {
            const state: SentenceStructureDataSettingsState = {
                topic: "Sentence Structure",
                quantity: undefined,
                adverbs: true,
                particles: false,
                expressions: true,
                verbs: false,
                nouns: true,
                adjectives: false
            };

            const deserialised = converter.deserialise(state);

            expect(deserialised.quantity).toBe(0);
        });

        it("Should convert valid calendar state", () => {
            const state: CalenderDataSettingsState = {
                topic: "Days & Months",
                quantity: 75,
                days: false,
                months: true,
                seasons: true,
                nouns: true,
                phrases: false
            };

            const deserialised = converter.deserialise(state);

            expect(deserialised).toStrictEqual(
                new CalendarSettingsBuilder()
                    .withQuantity(75)
                    .withTemporalNouns(false)
                    .withSeasons(true)
                    .withDays(false)
                    .withMonths(true)
                    .withPhrases(false)
                    .withTemporalNouns(true)
                    .build()
            );
        });

        it("Should convert an undefined quantity to 0 for calendar state", () => {
            const state: CalenderDataSettingsState = {
                topic: "Days & Months",
                quantity: undefined,
                days: false,
                months: true,
                seasons: true,
                nouns: true,
                phrases: false
            };

            const deserialised = converter.deserialise(state);

            expect(deserialised.quantity).toBe(0);
        });

        it("Should convert valid basics state", () => {
            const state: BasicsDataSettingsState = {
                topic: "Basics",
                quantity: 10,
                colours: false,
                animals: true,
                directions: false,
                weather: false,
                family: true,
                body: true
            };

            const deserialised = converter.deserialise(state);

            expect(deserialised).toStrictEqual(
                new BasicsSettingsBuilder()
                    .withQuantity(10)
                    .withWeather(false)
                    .withBody(true)
                    .withDirections(false)
                    .withFamily(true)
                    .withColours(false)
                    .withAnimals(true)
                    .build()
            );
        });

        it("Should convert an undefined quantity to 0 for basics state", () => {
            const state: BasicsDataSettingsState = {
                topic: "Basics",
                quantity: undefined,
                colours: false,
                animals: true,
                directions: false,
                weather: false,
                family: true,
                body: true
            };

            const deserialised = converter.deserialise(state);

            expect(deserialised.quantity).toBe(0);
        });

        it("Should throw an exception if an invalid instance is encountered", () => {
            const state: UnknownDataSettingsState = { topic: "Topic", quantity: 10, invalid: "broken" };
            expect(() => converter.deserialise(state)).toThrow(
                "Invalid DataSettingsState Object [{\"topic\":\"Topic\",\"quantity\":10,\"invalid\":\"broken\"}]"
            );
        });

        interface UnknownDataSettingsState extends DataSettingsState {
            invalid: string;
        }
    });
});
