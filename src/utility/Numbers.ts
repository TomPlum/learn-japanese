export class Numbers {
    static randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

    /**
     *
     * @param value
     */
    static getOrdinalSuffix = (value: number) => ["st", "nd", "rd"][((value + 90) % 100 - 10) % 10 - 1] || "th";

}
