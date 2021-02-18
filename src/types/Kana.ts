export class Kana {
    private readonly _code: string;
    private readonly _romanji: string;

    constructor(code: string, romanji: string) {
        this._code = code;
        this._romanji = romanji;
    }

    get code(): string {
        return this._code;
    }

    get romanji(): string {
        return this._romanji;
    }
}