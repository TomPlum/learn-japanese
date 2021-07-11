import Topic from "../../../Topic";

export default class DataSettings {
    private readonly _topic: Topic;
    private readonly _quantity: number | undefined;

    protected constructor(topic: Topic, quantity?: number) {
        this._topic = topic;
        this._quantity = quantity;
    }

    get topic(): Topic {
        return this._topic;
    }

    get quantity(): number | undefined {
        return this._quantity;
    }
}