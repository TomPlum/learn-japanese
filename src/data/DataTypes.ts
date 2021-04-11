import { KyoikuGrade } from "../types/kanji/KyoikuGrade";
import { KanaColumn } from "../types/kana/KanaColumn";

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
    kana: string;
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
    romanji: string;
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