import { ReactNode } from "react";

class Node {
    private readonly _value: any;
    private readonly _depth: number;

    constructor(value: any, depth: number) {
        this._value = value;
        this._depth = depth;
    }

    public static fromRoot(value: any) {
        return new Node(value, 0);
    }

    public hasChildren(): boolean {
        return this._value.props?.children;
    }

    get value(): any {
        return this._value;
    }

    get depth(): number {
        return this._depth;
    }
}

export default class ComponentTree {
    private depth = 0;
    private visited: Node[] = [];

    constructor(root: ReactNode) {
        this.doDepthFirstTraversal(Node.fromRoot(root));
    }

    public getDeepestLeafNode() {
        return this.visited.length > 0 ? this.visited.reduce((a, b) => a.depth > b.depth ? a : b).value : undefined;
    }

    private doDepthFirstTraversal(node: Node) {
        let next: Node[] = [];

        if (node?.hasChildren()) {
            const nestedChild: any | any[] = node.value.props.children;

            if (Array.isArray(nestedChild)) {
                const children = (nestedChild as Array<any>).map(it => new Node(it, this.depth));
                next.push(...children);
            } else {
                const children = new Node(nestedChild, this.depth);
                next.push(children);
            }
        }

        this.depth++;

        while (next.length > 0) {
            const nextChild = next.pop()!;
            this.visited.push(nextChild);
            this.doDepthFirstTraversal(nextChild);
        }

        this.depth--;
    }
}