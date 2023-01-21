export class Numbers {
  /**
   * Generates a random integer between the given range.
   * @param min The minimum value to generate.
   * @param max The maximum value to generate.
   * @return value The randomly generated integer.
   */
  static randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

  /**
   * Gets the ordinal suffix for the given number.
   * E.g. 1 would return st, 2 nd etc.
   * @param value The integer value.
   * @return suffix The ordinal suffix for the integer.
   */
  static getOrdinalSuffix = (value: number) => ["st", "nd", "rd"][((((value + 90) % 100) - 10) % 10) - 1] || "th"
}
