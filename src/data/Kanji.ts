import { KanjiData } from "./DataTypes";
import axios from "axios";

export async function kyoiku(): Promise<KanjiData[]> {
    return getKanji().then(data => data.filter(it => [1, 2, 3, 4, 5, 6].includes(it.grade ?? 0)));
}

export async function joyo(): Promise<KanjiData[]> {
    return getKanji().then(data => data.filter(it => [1, 2, 3, 4, 5, 6, 8].includes(it.grade ?? 0)));
}

async function getKanji(): Promise<KanjiData[]> {
    return axios.get('./Kanji.json').then(response => {
        return response.data.data;
    });
}
