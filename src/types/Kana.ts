export class Kana {
    private readonly _code: string;

    constructor(code: string) {
        this._code = code;
    }

    get code(): string {
        return this._code;
    }
}