import { v4 as UUID } from "uuid"

export default class SessionID {
    private readonly _value: string

    constructor() {
        this._value = UUID()
    }

    get value(): string {
        return this._value
    }
}
