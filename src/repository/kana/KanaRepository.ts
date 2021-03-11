import { Kana } from "../../types/Kana";
import hiragana from "../../data/Hiragana";
import katakana from "../../data/Katakana";
import KanaType from "../../types/KanaType";
import { KanaData } from "../../data/DataTypes";
import { KanaSettings } from "../../types/GameSettings";
import DiagraphFilter from "./DiagraphFilter";
import FilterChain from "../filter/FilterChain";
import QuantityFilter from "./QuantityFilter";
import KanaTypeFilter from "./KanaTypeFilter";

export class KanaRepository {

    read(config?: KanaSettings): Kana[] {
        const chain = new FilterChain<Kana>();

        if (!config?.hiragana) chain.addFilter(new KanaTypeFilter(KanaType.HIRAGANA));
        if (!config?.katakana) chain.addFilter(new KanaTypeFilter(KanaType.KATAKANA));
        if (!config?.diagraphs) chain.addFilter(new DiagraphFilter());
        if (config?.quantity) chain.addFilter(new QuantityFilter(config.quantity));

        return chain.execute(this.readAllKana());
    }

    private readAllKana(): Kana[] {
        const hiragana = this.readHiragana();
        const katakana = this.readKatakana();
        return hiragana.concat(katakana);
    }

    private readHiragana(): Kana[] {
        return this.convert(hiragana(), KanaType.HIRAGANA);
    }

    private readKatakana(): Kana[] {
        return this.convert(katakana(), KanaType.KATAKANA);
    }

    private convert(data: KanaData[], type: KanaType): Kana[] {
        return data.map(data => new Kana(data.code, data.romanji, type, data.column, data.diacritical));
    }
}