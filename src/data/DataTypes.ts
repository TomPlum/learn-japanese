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
    meaning: string;
}