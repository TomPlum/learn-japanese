import React, { ReactElement, ReactNode } from "react";

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
        return this._value?.props?.children;
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
    private readonly root: ReactNode;

    constructor(root: ReactNode) {
        this.root = root;
        this.doDepthFirstTraversal(Node.fromRoot(root));
    }

    /**
     * Finds the deepest leaf node in the tree.
     * Returns the first one if there are multiple at the max depth.
     * @return The deepest node.
     */
    public getDeepestLeafNode() {
        return this.visited.length > 0 ? this.visited.reduce((a, b) => a.depth > b.depth ? a : b).value : undefined;
    }

    /**
     * Adds the given properties to the leaf nodes of the {@link root} element.
     * @param props A function taking the leaf node and returning the new properties.
     * @return A copy of the whole element tree with the updated leaf node.
     */
    public addPropsToLeafNode(props?: (el: React.ReactElement) => {}): ReactElement {
        let response: ReactNode;

        const children: ReactElement[] = this.getAllChildren();

        children.reverse().forEach((child: ReactNode, i: number) => {
            if (i === children.length - 1) {
                const leaf = children[i];
                response = React.cloneElement(leaf, props ? props(leaf) : leaf.props);
            } else {
                const nextChild = children[i];
                response = React.cloneElement(nextChild, nextChild.props, response)
            }
        });

        return response as ReactElement;
    }

    /**
     * Creates a list of all the text content of the children from the root node.
     * @return An array of string values.
     */
    public getStringChildren(): string[] {
        return this.getAllChildren().map(child => child.props.textContent ?? child.props.children).filter(value => value);
    }

    private getAllChildren(): ReactElement[] {
        let child = this.root as ReactElement;

        let children = [];

        while (child.props && child.props.children) {
            children.push(child);
            child = child.props.children;
        }

        return children;
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
