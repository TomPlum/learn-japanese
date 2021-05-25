import { KyoikuGrade } from "../types/kanji/KyoikuGrade";
import { KanaColumn } from "../types/kana/KanaColumn";
import { CounterGroup } from "../types/numbers/CounterGroup";
import { AdjectiveType } from "../types/sentence/AdjectiveType";
import { VerbType } from "../types/sentence/VerbType";

export interface KanaData {
    name: string;
    code: string;
    romaji: string[];
    column: KanaColumn;
    diacritical: boolean;
}

export interface DayData {
    name: string;
    kanji?: string;
    romaji: string;
    kana?: string;
    meaning?: string;
}

export interface KanjiData {
    name?: string;
    code: string;
    on: KanjiReading[];
    kun: KanjiReading[];
    source: string;
    meanings: string[];
    grade: KyoikuGrade;
    examples: KanjiExample[];
}

export interface KanjiReading {
    kana: string;
    romaji: string;
}

export interface KanjiExample {
    value: string;
    kana: string[];
    english: string[];
}

export interface KyoikuGradeData {
    value: number;
    quantity: number;
}

export interface ColourData {
    name: string;
    kanji?: string;
    kana: string;
    romaji: string;
    colour: string;
}

export interface NumbersData {
    name: string;
    kanji?: string;
    kana: string[];
    romaji: string[];
}

export interface CounterData extends NumbersData {
    group: CounterGroup;
    example: { kana: string, english: string };
}

export interface SentenceStructureData {
    meanings: string[];
    kana: string;
    kanjiForm?: string;
    genkiLesson?: number;
}

export interface AdjectiveData extends SentenceStructureData {
    type: AdjectiveType;
}

export interface VerbData extends SentenceStructureData {
    type: VerbType;
}

export interface AdverbData extends SentenceStructureData {

}

export interface ExpressionData extends SentenceStructureData {

}