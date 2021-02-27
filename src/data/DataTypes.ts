import { KanaColumn } from "../types/KanaColumn";

export interface KanaData {
    name: string;
    code: string;
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
    grade: number;
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