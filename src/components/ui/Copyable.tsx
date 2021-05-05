import React, { Component, ReactElement } from "react";
import styles from "../../styles/sass/components/ui/Inspectable.module.scss";

export interface CopyableProps {
    className?: string;
}

interface CopyableState {
    hasWritten: boolean;
    hasFailed: boolean;
}

class Copyable extends Component<CopyableProps, CopyableState> {


    constructor(props: Readonly<CopyableProps> | CopyableProps) {
        super(props);
        this.state = {
            hasWritten: false,
            hasFailed: false
        }
    }

    render() {
        const { className } = this.props;
        return (
            <span title="Click to copy" onClick={this.copyToClipBoard}>
                {
                    React.cloneElement(this.props.children as ReactElement, {
                        className: [styles.element, className].join(" ")
                    })
                }
            </span>
        );
    }

    private copyToClipBoard = async () => {
        const value = (this.props.children as ReactElement).props.children ?? "N/A";
        await navigator.clipboard.writeText(value).catch(() => this.setState({ hasFailed: true }));
    }
}

export default Copyable;