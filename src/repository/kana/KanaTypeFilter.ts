import KanaFilter from "./KanaFilter";
import KanaType from "../../types/KanaType";
import { Kana } from "../../types/Kana";

export default class KanaTypeFilter implements KanaFilter {

    private readonly type: KanaType;

    constructor(type: KanaType) {
        this.type = type;
    }

    apply(kana: Kana[]): Kana[] {
        return kana.filter(kana => kana.type === this.type);
    }
}