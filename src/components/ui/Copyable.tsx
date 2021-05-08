import React, { Component, ReactElement, ReactNode } from "react";
import { Overlay, Tooltip } from "react-bootstrap";
import { Placement } from "react-bootstrap/Overlay";
import styles from "../../styles/sass/components/ui/Copyable.module.scss";
import Arrays from "../../utility/Arrays";

export interface CopyableProps {
    className?: string;
    inline?: boolean;
    placement?: Placement
}

interface CopyableState {
    hasWritten: boolean;
    hasFailed: boolean;
    active: boolean;
    successTimeout: any;
}

interface Node {
    value: any;
    depth: number;
}

class Copyable extends Component<CopyableProps, CopyableState> {

    private readonly ref: React.RefObject<any>;

    constructor(props: Readonly<CopyableProps> | CopyableProps) {
        super(props);

        this.ref = React.createRef();

        this.state = {
            hasWritten: false,
            hasFailed: false,
            active: false,
            successTimeout: undefined
        }
    }

    render() {
        const { className, inline, placement } = this.props;
        const { hasWritten, hasFailed, active } = this.state;

        //console.log(this.getAllChildren())

        return (
            <p
                title="Click to copy"
                onClick={this.copyToClipBoard}
                onMouseDown={() => this.setState({ active: true })}
                onMouseUp={() => this.setState({ active: false })}
                className={styles.paragraph}
                style={{ display: inline ? "inline" : "block" }}
            >
                 {React.cloneElement(this.props.children as ReactElement, {
                     className: [active ? styles.active : styles.element, className].join(" "),
                     ref: this.ref
                 })}

                <Overlay placement={placement ?? "right"} show={hasWritten} target={this.ref.current}>
                    <Tooltip id="button-tooltip" className={styles.tooltip}>
                        {hasFailed ? "Failed to copy.": "Copied!"}
                    </Tooltip>
                </Overlay>
            </p>
        );
    }

    private copyToClipBoard = async () => {
        const value = this.getLeafChildValue();
        await navigator.clipboard.writeText(value)
            .then(this.restartCopyTimer)
            .catch(() => this.setState({ hasWritten: false, hasFailed: true}));
    }

    private restartCopyTimer = () => {
        clearTimeout(this.state.successTimeout);
        this.setState({ hasWritten: true, hasFailed: false });
        setTimeout(() => this.setState({ hasWritten: false }), 1500);
    }

    private getLeafChildValue(): any {
        let children = [];
        children.push(this.props.children);

        let leaves: Node[] = [];

        let depth = 1;

        while (children.length > 0) {
            children.sort()
            const child = children.pop();
            console.log("POPPED", child)

            if (child?.props?.children) {
                const nestedChild: any | any[] = child.props.children;
                console.log("Nested Child", nestedChild)

                if (Array.isArray(nestedChild)) {
                    children.push(...nestedChild);
                    leaves.push(...[...nestedChild].map(it => { return { value: it, depth: depth } }));
                } else {
                    children.push(nestedChild);
                    leaves.push({ value: nestedChild, depth: depth });
                }

                depth++;
            } else {
                depth--;
            }
            console.log("Depth", depth)
        }

        console.log(leaves)
        return leaves.reduce((a, b) => a.depth > b.depth ? a : b).value?.trim();
    }
}

export default Copyable;