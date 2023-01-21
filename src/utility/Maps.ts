import Arrays from "./Arrays"

export default class Maps {
  /**
   * Checks if the given two maps are equal. They should have;
   * - The same length.
   * - The same keys.
   * - The same values.
   * @param first The first map to compare.
   * @param second The second map to compare.
   * @return true if equal, else false.
   */
  public static areEqual(first: Map<string, string>, second: Map<string, string>): boolean {
    if (first.size !== second.size) {
      return false
    }

    for (const [key, value] of first) {
      if (value !== second.get(key)) {
        return false
      }
    }

    return true
  }

  /**
   * Shuffles the keys and values for the given map.
   * @param map The map to shuffle.
   * @return map A copy of the map with the shuffled keys and values.
   */
  public static shuffle<K, V>(map: Map<K, V>): Map<K, V> {
    const keys = Arrays.shuffle([...map.keys()])
    const values = Arrays.shuffle([...map.values()])

    const shuffled = new Map<K, V>()
    for (let i = 0; i < map.size; i++) {
      shuffled.set(keys[i], values[i])
    }

    return shuffled
  }
}
