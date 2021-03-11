import {Kana} from "../../types/Kana";
import hiragana from "../../data/Hiragana";
import katakana from "../../data/Katakana";
import KanaType from "../../types/KanaType";
import {KanaData} from "../../data/DataTypes";
import Arrays from "../../utility/Arrays";
import { KanaSettings } from "../../types/GameSettings";
import HiraganaFilter from "./HiraganaFilter";
import KatakanaFilter from "./KatakanaFilter";
import DiagraphFilter from "./DiagraphFilter";
import FilterChain from "../filter/FilterChain";

export class KanaRepository {

    read(config?: KanaSettings): Kana[] {
        const kana = this.readAllKana();
        const chain = new FilterChain<Kana>();

        if (!config?.hiragana) chain.addFilter(new HiraganaFilter());
        if (!config?.katakana) chain.addFilter(new KatakanaFilter());
        if (!config?.diagraphs) chain.addFilter(new DiagraphFilter());

        if (config?.quantity) {
            return Arrays.shuffle(kana).splice(0, config.quantity);
        }

        return chain.execute(kana);
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