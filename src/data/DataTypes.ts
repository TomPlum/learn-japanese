import { KanaColumn } from "../types/KanaColumn";
import { KyoikuGrade } from "../types/kanji/KyoikuGrade";

export interface KanaData {
    name: string;
    code: string;
    romaji: string[];
    column: KanaColumn;
    diacritical: boolean;
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