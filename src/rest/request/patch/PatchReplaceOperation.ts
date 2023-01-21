import PatchOperation from "./PatchOperation"

export default class PatchReplaceOperation implements PatchOperation {
    private readonly _path: string
    private readonly _value: string

    constructor(path: string, value: string) {
        this._path = path
        this._value = value
    }

    get type(): string {
        return "replace"
    }

    get path(): string {
        return this._path
    }

    get value(): string {
        return this._value
    }
}
