import React, { Component, ReactElement } from "react";
import { Overlay, Tooltip } from "react-bootstrap";
import ComponentTree from "../../utility/ComponentTree";
import styles from "../../styles/sass/components/ui/Copyable.module.scss";
import { Placement } from "react-bootstrap/types";

export interface CopyableProps {
    className?: string;
    inline?: boolean;
    placement?: Placement;
    valueProvider?: (source?: any) => string;
}

interface CopyableState {
    hasWritten: boolean;
    hasFailed: boolean;
    active: boolean;
    successTimeout: any;
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
        const { className, inline, placement, children } = this.props;
        const { hasWritten, hasFailed, active } = this.state;

        return (
            <p
                title="Click to copy"
                onClick={this.copyToClipBoard}
                onMouseDown={() => this.setState({ active: true })}
                onMouseUp={() => this.setState({ active: false })}
                className={styles.paragraph}
                style={{ display: inline ? "inline" : "block" }}
            >
                 {React.cloneElement(children as ReactElement, {
                     className: [(active ? styles.active : styles.element), className].join(" "),
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
        const { children, valueProvider } = this.props;

        let value = new ComponentTree(children).getDeepestLeafNode();

        if (valueProvider) {
            value = valueProvider(value);
        }

        await navigator.clipboard.writeText(value)
            .then(this.restartCopyTimer)
            .catch(() => this.setState({ hasWritten: false, hasFailed: true }));
    }

    private restartCopyTimer = () => {
        clearTimeout(this.state.successTimeout);
        this.setState({ hasWritten: true, hasFailed: false });
        setTimeout(() => this.setState({ hasWritten: false }), 1500);
    }
}

export default Copyable;
