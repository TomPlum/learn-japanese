import DataSettings from "../domain/session/settings/data/DataSettings"
import {
    BasicsDataSettingsState,
    CalenderDataSettingsState,
    DataSettingsState,
    KanaDataSettingsState,
    KanjiDataSettingsState,
    NumbersDataSettingsState,
    SentenceStructureDataSettingsState
} from "../slices/DataSettingsSlice"
import KanaSettings, { KanaSettingsBuilder } from "../domain/session/settings/data/KanaSettings"
import KanjiSettings, { KanjiSettingsBuilder } from "../domain/session/settings/data/KanjiSettings"
import NumbersSettings, { NumbersSettingsBuilder } from "../domain/session/settings/data/NumbersSettings"
import SentenceStructureSettings, {
    SentenceStructureSettingsBuilder
} from "../domain/session/settings/data/SentenceStructureSettings"
import CalendarSettings, { CalendarSettingsBuilder } from "../domain/session/settings/data/CalendarSettings"
import BasicsSettings, { BasicsSettingsBuilder } from "../domain/session/settings/data/BasicsSettings"
import { KyoikuGrade } from "../domain/kanji/KyoikuGrade"
import {
    BasicsDataSettingsRequest,
    BasicsDataSettingsResponse,
    CalenderDataSettingsRequest,
    CalenderDataSettingsResponse,
    DataSettingsRequest,
    DataSettingsResponse,
    KanaDataSettingsRequest,
    KanaDataSettingsResponse,
    KanjiDataSettingsRequest,
    KanjiDataSettingsResponse,
    NumbersDataSettingsRequest,
    NumbersDataSettingsResponse,
    SentenceStructureDataSettingsRequest,
    SentenceStructureDataSettingsResponse
} from "../repository/PresetRepository"
import Topic from "../domain/Topic"

class DataSettingsConverter {
    public convert(topic: Topic, settings: DataSettingsResponse): DataSettings {
        const quantity = settings.quantity
        switch (topic) {
            case Topic.KANA: {
                const kana = settings.config as KanaDataSettingsResponse
                return new KanaSettingsBuilder()
                    .withOnlyDiagraphs(kana.onlyDiagraphs)
                    .withDiacriticals(kana.diacriticals)
                    .withRegularKana(kana.regular)
                    .withDiagraphs(kana.diagraphs)
                    .withHiragana(kana.hiragana)
                    .withKatakana(kana.katakana)
                    .withQuantity(quantity)
                    .build()
            }
            case Topic.KANJI: {
                const kanji = settings.config as KanjiDataSettingsResponse
                return new KanjiSettingsBuilder()
                    .withGrades(kanji.grades.map((grade) => KyoikuGrade.fromInteger(grade)))
                    .withQuantity(quantity)
                    .withTags(kanji.tags)
                    .build()
            }
            case Topic.NUMBERS: {
                const numbers = settings.config as NumbersDataSettingsResponse
                return new NumbersSettingsBuilder()
                    .withExceptions(numbers.exceptions)
                    .withCounters(numbers.counters)
                    .withSequence(numbers.sequence)
                    .withNumbers(numbers.numbers)
                    .withUnits(numbers.units)
                    .withQuantity(quantity)
                    .withAge(numbers.age)
                    .build()
            }
            case Topic.GRAMMAR: {
                const grammar = settings.config as SentenceStructureDataSettingsResponse
                return new SentenceStructureSettingsBuilder()
                    .withExpressions(grammar.expressions)
                    .withAdjectives(grammar.adjectives)
                    .withParticles(grammar.particles)
                    .withAdverbs(grammar.adverbs)
                    .withQuantity(quantity)
                    .withNouns(grammar.nouns)
                    .withVerbs(grammar.verbs)
                    .build()
            }
            case Topic.CALENDAR: {
                const calendar = settings.config as CalenderDataSettingsResponse
                return new CalendarSettingsBuilder()
                    .withTemporalNouns(calendar.nouns)
                    .withSeasons(calendar.seasons)
                    .withPhrases(calendar.phrases)
                    .withMonths(calendar.months)
                    .withDays(calendar.days)
                    .withQuantity(quantity)
                    .build()
            }
            case Topic.BASICS: {
                const basics = settings.config as BasicsDataSettingsResponse
                return new BasicsSettingsBuilder()
                    .withDirections(basics.directions)
                    .withAnimals(basics.animals)
                    .withColours(basics.colours)
                    .withWeather(basics.weather)
                    .withFamily(basics.family)
                    .withQuantity(quantity)
                    .withBody(basics.body)
                    .build()
            }
            default: {
                throw new Error(`DataSettingsConverter: Unknown Topic: ${topic.name}`)
            }
        }
    }

    public convertRequest(settings: DataSettings): DataSettingsRequest {
        if (settings instanceof KanaSettings) {
            return {
                quantity: settings.quantity,
                config: {
                    hiragana: settings.hiragana,
                    katakana: settings.katakana,
                    diagraphs: settings.diagraphs,
                    diacriticals: settings.diacriticals,
                    regular: settings.regular,
                    onlyDiagraphs: settings.onlyDiagraphs
                } as KanaDataSettingsRequest
            }
        } else if (settings instanceof KanjiSettings) {
            return {
                quantity: settings.quantity,
                config: {
                    tags: settings.tags,
                    grades: settings.grades.map((it) => it.value)
                } as KanjiDataSettingsRequest
            }
        } else if (settings instanceof NumbersSettings) {
            return {
                quantity: settings.quantity,
                config: {
                    age: settings.age,
                    exceptions: settings.exceptions,
                    counters: settings.counters,
                    sequence: settings.sequence,
                    units: settings.units,
                    numbers: settings.numbers
                } as NumbersDataSettingsRequest
            }
        } else if (settings instanceof SentenceStructureSettings) {
            return {
                quantity: settings.quantity,
                config: {
                    expressions: settings.expressions,
                    nouns: settings.nouns,
                    verbs: settings.verbs,
                    particles: settings.particles,
                    adverbs: settings.adverbs,
                    adjectives: settings.adjectives
                } as SentenceStructureDataSettingsRequest
            }
        } else if (settings instanceof CalendarSettings) {
            return {
                quantity: settings.quantity,
                config: {
                    nouns: settings.nouns,
                    days: settings.days,
                    months: settings.months,
                    phrases: settings.phrases,
                    seasons: settings.seasons
                } as CalenderDataSettingsRequest
            }
        } else if (settings instanceof BasicsSettings) {
            return {
                quantity: settings.quantity,
                config: {
                    body: settings.body,
                    animals: settings.animals,
                    directions: settings.directions,
                    family: settings.family,
                    weather: settings.weather,
                    colours: settings.colours
                } as BasicsDataSettingsRequest
            }
        } else {
            throw new Error(`Unknown DataSettings Type [${settings.constructor.name}]`)
        }
    }

    public serialise(settings: DataSettings): DataSettingsState {
        if (settings instanceof KanaSettings) {
            return {
                topic: settings.topic.name,
                quantity: settings.quantity,
                hiragana: settings.hiragana,
                katakana: settings.katakana,
                diagraphs: settings.diagraphs,
                diacriticals: settings.diacriticals,
                regular: settings.regular,
                onlyDiagraphs: settings.onlyDiagraphs
            } as KanaDataSettingsState
        } else if (settings instanceof KanjiSettings) {
            return {
                topic: settings.topic.name,
                quantity: settings.quantity,
                tags: settings.tags,
                grades: settings.grades.map((it) => it.value)
            } as KanjiDataSettingsState
        } else if (settings instanceof NumbersSettings) {
            return {
                topic: settings.topic.name,
                quantity: settings.quantity,
                age: settings.age,
                exceptions: settings.exceptions,
                counters: settings.counters,
                sequence: settings.sequence,
                units: settings.units,
                numbers: settings.numbers
            } as NumbersDataSettingsState
        } else if (settings instanceof SentenceStructureSettings) {
            return {
                topic: settings.topic.name,
                quantity: settings.quantity,
                expressions: settings.expressions,
                nouns: settings.nouns,
                verbs: settings.verbs,
                particles: settings.particles,
                adverbs: settings.adverbs,
                adjectives: settings.adjectives
            } as SentenceStructureDataSettingsState
        } else if (settings instanceof CalendarSettings) {
            return {
                topic: settings.topic.name,
                quantity: settings.quantity,
                nouns: settings.nouns,
                days: settings.days,
                months: settings.months,
                phrases: settings.phrases,
                seasons: settings.seasons
            } as CalenderDataSettingsState
        } else if (settings instanceof BasicsSettings) {
            return {
                topic: settings.topic.name,
                quantity: settings.quantity,
                body: settings.body,
                animals: settings.animals,
                directions: settings.directions,
                family: settings.family,
                weather: settings.weather,
                colours: settings.colours
            } as BasicsDataSettingsState
        } else {
            throw new Error(`Unknown DataSettings Type [${settings.constructor.name}]`)
        }
    }

    public deserialise(state: DataSettingsState): DataSettings {
        if (DataSettingsConverter.isKanaSettings(state)) {
            return new KanaSettingsBuilder()
                .withOnlyDiagraphs(state.onlyDiagraphs)
                .withDiacriticals(state.diacriticals)
                .withRegularKana(state.regular)
                .withDiagraphs(state.diagraphs)
                .withQuantity(state.quantity)
                .withHiragana(state.hiragana)
                .withKatakana(state.katakana)
                .build()
        } else if (DataSettingsConverter.isKanjiSettings(state)) {
            return new KanjiSettingsBuilder()
                .withGrades(state.grades.map((grade) => KyoikuGrade.fromInteger(grade)))
                .withQuantity(state.quantity)
                .withTags(state.tags)
                .build()
        } else if (DataSettingsConverter.isNumbersSettings(state)) {
            return new NumbersSettingsBuilder()
                .withQuantity(state.quantity ?? 0)
                .withExceptions(state.exceptions)
                .withCounters(state.counters)
                .withSequence(state.sequence)
                .withNumbers(state.numbers)
                .withUnits(state.units)
                .withAge(state.age)
                .build()
        } else if (DataSettingsConverter.isSentenceStructureSettings(state)) {
            return new SentenceStructureSettingsBuilder()
                .withExpressions(state.expressions)
                .withQuantity(state.quantity ?? 0)
                .withAdjectives(state.adjectives)
                .withParticles(state.particles)
                .withAdverbs(state.adverbs)
                .withNouns(state.nouns)
                .withVerbs(state.verbs)
                .build()
        } else if (DataSettingsConverter.isCalendarSettings(state)) {
            return new CalendarSettingsBuilder()
                .withQuantity(state.quantity ?? 0)
                .withDays(state.days)
                .withMonths(state.months)
                .withPhrases(state.phrases)
                .withSeasons(state.seasons)
                .withTemporalNouns(state.nouns)
                .build()
        } else if (DataSettingsConverter.isBasicsSettings(state)) {
            return new BasicsSettingsBuilder()
                .withQuantity(state.quantity ?? 0)
                .withDirections(state.directions)
                .withAnimals(state.animals)
                .withColours(state.colours)
                .withWeather(state.weather)
                .withFamily(state.family)
                .withBody(state.body)
                .build()
        } else {
            throw new Error(`Invalid DataSettingsState Object [${JSON.stringify(state)}]`)
        }
    }

    private static isKanaSettings(state: DataSettingsState): state is KanaDataSettingsState {
        return state && (<KanaDataSettingsState>state).onlyDiagraphs !== undefined
    }

    private static isKanjiSettings(state: DataSettingsState): state is KanjiDataSettingsState {
        return (<KanjiDataSettingsState>state).grades !== undefined
    }

    private static isNumbersSettings(state: DataSettingsState): state is NumbersDataSettingsState {
        return (<NumbersDataSettingsState>state).sequence !== undefined
    }

    private static isSentenceStructureSettings(state: DataSettingsState): state is SentenceStructureDataSettingsState {
        return (<SentenceStructureDataSettingsState>state).particles !== undefined
    }

    private static isCalendarSettings(state: DataSettingsState): state is CalenderDataSettingsState {
        return (<CalenderDataSettingsState>state).phrases !== undefined
    }

    private static isBasicsSettings(state: DataSettingsState): state is BasicsDataSettingsState {
        return (<BasicsDataSettingsState>state).weather !== undefined
    }
}

export default DataSettingsConverter
