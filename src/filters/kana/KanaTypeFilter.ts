import KanaType from "../../types/KanaType";
import { Kana } from "../../types/Kana";
import { Filter } from "../Filter";

export default class KanaTypeFilter implements Filter<Kana> {

    private readonly type: KanaType;
    private readonly include: boolean;

    constructor(type: KanaType, include: boolean = false) {
        this.type = type;
        this.include = include;
    }

    apply(kana: Kana[]): Kana[] {
        return kana.filter(kana => this.include ? kana.type === this.type : kana.type !== this.type);
    }
}