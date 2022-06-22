import PatchOperation from "./PatchOperation";

export default class PatchRequest {
    private readonly _operations: PatchOperation[];

    constructor(operations: PatchOperation[]) {
        this._operations = operations;
    }

    public toJSON() {
        return this._operations.map((operation: PatchOperation) => {
            return {
                "op": operation.type,
                "path": `/${operation.path}`,
                "value": operation.value
            }
        });
    }
}
