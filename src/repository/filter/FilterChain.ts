import { Filter } from "./Filter";

export default class FilterChain<T> {
    private filters = new Set<Filter<any>>();

    constructor() { }

    public addFilter(filter: Filter<any>) {
        this.filters.add(filter);
    }

    public execute(values: T[]): T[] {
        let reduced = values;
        [...this.filters].forEach((filter: Filter<any>) => {
            reduced = filter.apply(reduced);
        });
        return reduced;
    }
}