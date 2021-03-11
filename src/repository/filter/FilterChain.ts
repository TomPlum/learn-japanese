import { Filter } from "./Filter";

export default class FilterChain<T> {
    private filters = new Set<Filter<T>>();

    constructor() { }

    public addFilter(filter: Filter<T>) {
        this.filters.add(filter);
    }

    public execute(values: T[]): T[] {
        let reduced = values;
        [...this.filters].forEach((filter: Filter<T>) => {
            reduced = filter.apply(reduced);
        });
        return reduced;
    }
}