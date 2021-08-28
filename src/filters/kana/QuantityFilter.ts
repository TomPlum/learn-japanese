import { Kana } from "../../domain/kana/Kana";
import { Filter } from "../Filter";
import Arrays from "../../utility/Arrays";

export default class QuantityFilter implements Filter<Kana> {

    private readonly quantity: number;
    private readonly random: boolean;

    constructor(quantity: number, random: boolean = false) {
        this.quantity = quantity;
        this.random = random;
    }

    apply(kana: Kana[]): Kana[] {
        if (this.random) {
            return Arrays.getRandomElements(kana, this.quantity);
        } else {
            return kana.splice(0, this.quantity);
        }
    }
}
