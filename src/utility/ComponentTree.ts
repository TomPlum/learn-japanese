import { ReactNode } from "react";

interface Node {
    value: any;
    depth: number;
}

export default class ComponentTree {
    private depth = 0;
    private visited: Node[] = [];

    constructor(root: ReactNode) {
        this.doDepthFirstTraversal({ value: root, depth: 0 });
    }

    public getFirstLeafNode() {
        return this.visited.reduce((a, b) => a.depth > b.depth ? a : b).value;
    }

    private doDepthFirstTraversal(node: Node) {
        let next: Node[] = [];

        if (node?.value.props?.children) {
            const nestedChild: any | any[] = node.value.props.children;
            console.log("Nested Child", nestedChild)

            if (Array.isArray(nestedChild)) {
                const children = (nestedChild as Array<any>).map(it => { return { value: it, depth: this.depth } });
                next.push(...children);
            } else {
                const children = { value: nestedChild, depth: this.depth };
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