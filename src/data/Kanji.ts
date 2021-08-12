import { KanjiData } from "./DataTypes";
import * as KanjiJSON from "./Kanji.json";

export function kyoiku(): KanjiData[] {
    return KanjiJSON.data.filter(it => [1, 2, 3, 4, 5, 6].includes(it.grade ?? 0));
}

export function joyo(): KanjiData[] {
    return kyoiku().concat(KanjiJSON.data.filter(it => (it.grade ?? 0) === 8));
}
