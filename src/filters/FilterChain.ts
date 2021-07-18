import { Filter } from "./Filter";

export default class FilterChain<T> {
    private filters = new Set<Filter<T>>();

    public addFilter(filter: Filter<T>) {
        this.filters.add(filter);
    }

    public withFilter(filter: Filter<T>): FilterChain<T> {
        this.filters.add(filter);
        return this;
    }

    public execute(values: T[]): T[] {
        let reduced = values;
        [...this.filters].forEach((filter: Filter<T>) => {
            reduced = filter.apply(reduced);
        });
        return reduced;
    }
}