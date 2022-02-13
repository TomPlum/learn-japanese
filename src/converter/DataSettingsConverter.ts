import DataSettings from "../domain/session/settings/data/DataSettings";
import { BasicsDataSettingsState, CalenderDataSettingsState, DataSettingsState, KanaDataSettingsState, KanjiDataSettingsState, NumbersDataSettingsState, SentenceStructureDataSettingsState } from "../slices/DataConfigSlice";
import KanaSettings, { KanaSettingsBuilder } from "../domain/session/settings/data/KanaSettings";
import KanjiSettings, { KanjiSettingsBuilder } from "../domain/session/settings/data/KanjiSettings";
import NumbersSettings, { NumbersSettingsBuilder } from "../domain/session/settings/data/NumbersSettings";
import SentenceStructureSettings, { SentenceStructureSettingsBuilder } from "../domain/session/settings/data/SentenceStructureSettings";
import CalendarSettings, { CalendarSettingsBuilder } from "../domain/session/settings/data/CalendarSettings";
import BasicsSettings, { BasicsSettingsBuilder } from "../domain/session/settings/data/BasicsSettings";
import { KyoikuGrade } from "../domain/kanji/KyoikuGrade";
import Topic from "../domain/Topic";

class DataSettingsConverter {
    public serialise(settings: DataSettings): DataSettingsState {
        if (settings instanceof KanaSettings) {
            return {
                topic: Topic.KANA.name,
                quantity: settings.quantity,
                hiragana: settings.hiragana,
                katakana: settings.katakana,
                diagraphs: settings.diagraphs,
                diacriticals: settings.diacriticals,
                regular: settings.regular,
                onlyDiagraphs: settings.onlyDiagraphs
            } as KanaDataSettingsState;
        } else if (settings instanceof KanjiSettings) {
            return {
                topic: Topic.KANJI.name,
                quantity: settings.quantity,
                tags: settings.tags,
                grades: settings.grades.map(it => it.value)
            } as KanjiDataSettingsState;
        } else if (settings instanceof NumbersSettings) {
            return {
                topic: Topic.NUMBERS.name,
                quantity: settings.quantity,
                age: settings.age,
                exceptions: settings.exceptions,
                counters: settings.counters,
                sequence: settings.sequence,
                units: settings.units,
                numbers: settings.numbers
            } as NumbersDataSettingsState;
        } else if (settings instanceof SentenceStructureSettings) {
            return {
                topic: Topic.GRAMMAR.name,
                quantity: settings.quantity,
                expressions: settings.expressions,
                nouns: settings.nouns,
                verbs: settings.verbs,
                particles: settings.particles,
                adverbs: settings.adverbs,
                adjectives: settings.adjectives
            } as SentenceStructureDataSettingsState;
        } else if (settings instanceof CalendarSettings) {
            return {
                topic: Topic.CALENDAR.name,
                quantity: settings.quantity,
                nouns: settings.nouns,
                days: settings.days,
                months: settings.months,
                phrases: settings.phrases,
                seasons: settings.seasons
            } as CalenderDataSettingsState;
        } else if (settings instanceof BasicsSettings) {
            return {
                topic: Topic.BASICS.name,
                quantity: settings.quantity,
                body: settings.body,
                animals: settings.animals,
                directions: settings.directions,
                family: settings.family,
                weather: settings.weather,
                colours: settings.colours
            } as BasicsDataSettingsState;
        } else {
            throw new Error(`Unknown DataSettings Type [${settings.constructor.name}]`);
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
                .build();
        } else if (DataSettingsConverter.isKanjiSettings(state)) {
            return new KanjiSettingsBuilder()
                .withGrades(state.grades.map(grade => KyoikuGrade.fromInteger(grade)))
                .withQuantity(state.quantity)
                .withTags(state.tags)
                .build();
        } else if (DataSettingsConverter.isNumbersSettings(state)) {
            return new NumbersSettingsBuilder()
                .withQuantity(state.quantity ?? 0)
                .withExceptions(state.exceptions)
                .withCounters(state.counters)
                .withSequence(state.sequence)
                .withNumbers(state.numbers)
                .withUnits(state.units)
                .withAge(state.age)
                .build();
        } else if (DataSettingsConverter.isSentenceStructureSettings(state)) {
            return new SentenceStructureSettingsBuilder()
                .withExpressions(state.expressions)
                .withQuantity(state.quantity ?? 0)
                .withAdjectives(state.adjectives)
                .withParticles(state.particles)
                .withAdverbs(state.adverbs)
                .withNouns(state.nouns)
                .withVerbs(state.verbs)
                .build();
        } else if (DataSettingsConverter.isCalendarSettings(state)) {
            return new CalendarSettingsBuilder()
                .withQuantity(state.quantity ?? 0)
                .withDays(state.days)
                .withMonths(state.months)
                .withPhrases(state.phrases)
                .withSeasons(state.seasons)
                .withTemporalNouns(state.nouns)
                .build();
        } else if (DataSettingsConverter.isBasicsSettings(state)) {
            return new BasicsSettingsBuilder()
                .withQuantity(state.quantity ?? 0)
                .withDirections(state.directions)
                .withAnimals(state.animals)
                .withColours(state.colours)
                .withWeather(state.weather)
                .withFamily(state.family)
                .withBody(state.body)
                .build();
        } else {
            throw new Error(`Invalid DataSettingsState Object [${JSON.stringify(state)}]`);
        }
    }

    private static isKanaSettings(state: DataSettingsState): state is KanaDataSettingsState {
        return state && (<KanaDataSettingsState> state).onlyDiagraphs !== undefined;
    }

    private static isKanjiSettings(state: DataSettingsState): state is KanjiDataSettingsState {
        return (<KanjiDataSettingsState> state).grades !== undefined;
    }

    private static isNumbersSettings(state: DataSettingsState): state is NumbersDataSettingsState {
        return (<NumbersDataSettingsState> state).sequence !== undefined;
    }

    private static isSentenceStructureSettings(state: DataSettingsState): state is SentenceStructureDataSettingsState {
        return (<SentenceStructureDataSettingsState> state).particles !== undefined;
    }

    private static isCalendarSettings(state: DataSettingsState): state is CalenderDataSettingsState {
        return (<CalenderDataSettingsState> state).phrases !== undefined;
    }

    private static isBasicsSettings(state: DataSettingsState): state is BasicsDataSettingsState {
        return (<BasicsDataSettingsState> state).weather !== undefined;
    }
}

export default DataSettingsConverter;
