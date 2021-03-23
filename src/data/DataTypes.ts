import { KanaColumn } from "../types/KanaColumn";

export interface KanaData {
    name: string;
    code: string;
    romaji: string[];
    column: KanaColumn;
    diacritical: boolean;
}