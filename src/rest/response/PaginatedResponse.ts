export default interface PaginatedResponse<T> {
    pages: number;
    total: number;
    value: T;
}
