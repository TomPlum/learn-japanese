import {Kana} from "../types/Kana";
import hiragana from "../data/Hiragana";
import katakana from "../data/Katakana";
import KanaType from "../types/KanaType";
import {KanaData} from "../data/DataTypes";

export interface KanaConfig {
    includeHiragana?: boolean;
    includeKatakana?: boolean;
    includeDiagraphs?: boolean;
}

export class KanaRepository {

    read(config: KanaConfig): Kana[] {

        let kana: Kana[];

        if (config?.includeHiragana && config.includeKatakana) {
            kana = this.readAllKana();
        } else if (config?.includeHiragana) {
            kana = this.readHiragana();
        } else if (config?.includeKatakana) {
            kana = this.readKatakana();
        } else {
            throw new ReferenceError("Invalid Test Settings: No Kana Selected");
        }

        if (!config.includeDiagraphs) {
            kana = kana.filter(kana => !kana.isDiagraph());
        }

        return kana;
    }

    private readAllKana(): Kana[] {
        const hiragana = this.readHiragana();
        const katakana = this.readKatakana();
        return hiragana.concat(katakana);
    }

    private readHiragana(): Kana[] {
        return this.convert(hiragana, KanaType.HIRAGANA);
    }

    private readKatakana(): Kana[] {
        return this.convert(katakana, KanaType.KATAKANA);
    }

    private convert(data: KanaData[], type: KanaType): Kana[] {
        return data.map(data => new Kana(data.code, data.name, type, data.column));
    }
}