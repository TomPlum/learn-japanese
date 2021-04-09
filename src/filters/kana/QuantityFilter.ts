import { Kana } from "../../types/kana/Kana";
import { Filter } from "../Filter";

export default class QuantityFilter implements Filter<Kana> {

    private readonly quantity: number;

    constructor(quantity: number) {
        this.quantity = quantity;
    }

    apply(kana: Kana[]): Kana[] {
        return kana.splice(0, this.quantity);
    }
}