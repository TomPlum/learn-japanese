import LearnableField from "./LearnableField";
import RomajiGenerator from "../../utility/RomajiGenerator";
import { KanjiReading } from "../kanji/KanjiReading";
import { v4 as uuid } from "uuid";

/**
 * The base class for all data objects in the application.
 *
 * Both the game and learn components interface with this abstraction to
 * minimise the amount of duplication and boilerplate code that needs to be written.
 * This makes the app more data-driven.
 *
 * A {@link Learnable} object can really be anything that can be learned.
 * That could be anything from a Kanji character, to a compass direction, to a grammar particle.
 */
export abstract class Learnable {

    /**
     * Used by a {@link FlashCardBack} to display what the thing is.
     * It's left up to the given implementation to decide what it's title display as.
     *
     * For example;
     * - Kanji characters might show the grade, like "Grade 2 Kyoiku Kanji".
     * - Kana characters might show the syllabary, like "Hiragana".
     *
     * @return title A single string representing concisely what the data object is.
     */
    abstract getTitle(): string;

    /**
     * The Japanese kana representation of the data object.
     * Can be either Hiragana or Katakana.
     * Uses an array as some data objects have multiple pronunciations (and therefore kana).
     * @return kana An array of strings of Japanese kana.
     */
    abstract getKana(): string[];

    /**
     * The English meanings of the data object.
     * Uses an array as some data objects have multiple meanings (I.e. Kanji).
     * @return meanings An array of words describing what the object means in English.
     */
    abstract getMeanings(): string[];

    /**
     * Used by the {@link HintButton} to give the user a hint during
     * a gaming or learning session.
     *
     * For example;
     * - Kanji characters might hint at their grade or one of their tags.
     * - Kana characters might hint about which column they are from.
     * - Generic word definitions might give the user their first character.
     *
     * @return hint A small but significant piece of info about the data object.
     */
    abstract getHint(): string;

    /**
     * Used by instances of {@link GameQuestion} to retrieve the value of a specific field.
     *
     * Creates a dependency inversion on the fields in this class so that game configuration
     * can hold references to which fields want to be used before runtime.
     *
     * @param field The field whose data is to be retrieved.
     * @throws error If the given field is unknown.
     * @return value The values for the given field. Can be empty.
     */
    public getFieldValues(field: LearnableField): string[] {
        switch (field) {
            case LearnableField.ROMAJI: {
                const generator = new RomajiGenerator();
                return this.getKana().map((kana: string) => generator.generate(kana));
            }
            case LearnableField.KANA: {
                return this.getKana();
            }
            case LearnableField.MEANING: {
                return this.getMeanings();
            }
            case LearnableField.KANJI: {
                const kanji = this.getKanjiVariation();
                return kanji !== null && kanji !== undefined ? [kanji] : [];
            }
            case LearnableField.JAPANESE: {
                const kanji = this.getKanjiVariation();
                return kanji ? [kanji] : this.getKana();
            }
            case LearnableField.ONYOMI_READING: {
                return this.getOnyomiReadings().map((reading: KanjiReading) => reading.kana);
            }
            case LearnableField.KUNYOMI_READING: {
                return this.getKunyomiReadings().map((reading: KanjiReading) => reading.kana);
            }
            default: {
                throw new ReferenceError("Invalid Learnable Field: " + field);
            }
        }
    }

    /**
     * Currently only used by {@link Kanji} as they have different types of readings.
     * The on'yomi readings are the original Chinese ones.
     * @return reading The Chinese on'yomi readings.
     */
    public getOnyomiReadings(): KanjiReading[] {
        return [];
    }

    /**
     * Currently only used by {@link Kanji} as they have different types of readings.
     * The kun'yomi readings are the newer Japanese ones.
     * @return reading The Japanese kun'yomi readings.
     */
    public getKunyomiReadings(): KanjiReading[] {
        return [];
    }

    /**
     * Used by the {@link MemoryGame} to calculate the score for a data object.
     * Can be overridden by the subclass, but a default is provided here.
     * @return score The base score value by which a multiplier will be applied.
     */
    public getBaseScore(): number {
        return 100;
    }

    /**
     * TODO: Is this needed now? it's only used by the numbers flash card atm. Maybe bring Kanji examples in here?
     */
    public getExample(): LearningExample | undefined {
        return undefined;
    }

    /**
     * A variation of the Japanese kana condensed into it's kanji alternative.
     *
     * If a data object has kana, it's possible that kana is derived from kanji.
     * E.g: The kun'yomi reading of person, ひと -> it's kanji representation, 人.
     *
     * It's also possible that the kana just isn't derived from some kanji.
     * E.g: The adverb "not much", あまり -> has no kanji, so it's undefined.
     *
     * It's also possible that only some of the kana is derived from kanji.
     * E.g: The verb "to use", つかう -> has some kanji, so it becomes 使う.
     *
     * @return kanji The kanji representation of the objects' kana or undefined if it has none.
     */
    public getKanjiVariation(): string | undefined {
        return undefined;
    }

    /**
     * Metadata used to categorise a data object.
     * Any given data object can have zero or many tags if applicable.
     * Often used to filter or sort a collection of data objects.
     * @return tags A list of words that categorise the object.
     */
    public getTags(): string[] {
        return [];
    }

    /**
     * Uniquely identifies a data object.
     * Defaults to a V4 UUID.
     * @return id a unique ID.
     */
    public getUniqueID(): string {
        return uuid();
    }

    /**
     * Checks whether two {@link Learnable} instances are equal to one another.
     * Behaves the same way the same named method would do in the base Object class of an OOP language.
     * It is often left to the concrete implementation to override this.
     * @param other The other instance of to compare with.
     * @return true if they are equal, false if not.
     */
    public equals(other: Learnable): boolean {
        return this === other;
    }
}

export interface LearningExample {
    english: string;
    kana: string;
}