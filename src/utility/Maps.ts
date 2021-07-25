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
            return false;
        }

        for(let [key, value] of first) {
            if (value !== second.get(key)) {
                return false;
            }
        }

        return true;
    }
}
