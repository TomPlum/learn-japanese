class PageNumber {

    private readonly _start: number;
    private readonly _end: number | undefined;

    private constructor(start: number, end?: number) {
        this._start = start;
        this._end = end;
    }

    public static from(page: number): PageNumber {
        return new PageNumber(page, undefined);
    }

    public static of(from: number, to: number): PageNumber {
        return new PageNumber(from, to);
    }

    public toString(): string {
        if (this._end) {
            return `${this._start} - ${this._end}`;
        }
        return this._start.toString();
    }
}

export default PageNumber;
