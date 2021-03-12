export interface Filter<T> {
    apply: (values: T[]) => T[];
}