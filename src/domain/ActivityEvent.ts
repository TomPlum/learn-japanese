import { ActivityEventType } from "./ActivityEventType"

class ActivityEvent {
    private readonly _type: ActivityEventType
    private readonly _time: number

    public static of(type: ActivityEventType, time: number): ActivityEvent {
        return new ActivityEvent(type, time)
    }

    private constructor(type: ActivityEventType, time: number) {
        this._type = type
        this._time = time
    }

    get type(): ActivityEventType {
        return this._type
    }

    get time(): number {
        return this._time
    }
}

export default ActivityEvent
