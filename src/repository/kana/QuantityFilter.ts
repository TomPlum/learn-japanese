import KanaFilter from "./KanaFilter";
import { Kana } from "../../types/Kana";

export default class QuantityFilter implements KanaFilter {

    private readonly quantity: number;

    constructor(quantity: number) {
        this.quantity = quantity;
    }

    apply(kana: Kana[]): Kana[] {
        return kana.splice(0, this.quantity);
    }
}