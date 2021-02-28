import { KanaColumn } from "../types/KanaColumn";

export interface KanaData {
    name: string;
    code: string;
    romanji: string[];
    column: KanaColumn;
    diacritical: boolean;
}