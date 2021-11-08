import { Filter } from "./Filter";

class CustomFilter<T> implements Filter<T> {

    private readonly _filter: (value: T) => boolean;

    constructor(filter: (value: T) => boolean) {
        this._filter = filter;
    }

    apply(values: T[]): T[] {
        return values.filter(value => this._filter(value));
    }

}

export default CustomFilter;
