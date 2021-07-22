import { Component } from "react";
import styles from "../../styles/sass/components/ui/ScrollableContainer.module.scss";

export interface ScrollableContainerProps {
    className?: string;
    maxHeight?: number;
    height?: number;
}

class ScrollableContainer extends Component<ScrollableContainerProps> {
    render() {
        const { className, maxHeight, height, children } = this.props;

        return (
            <div className={[styles.container, className].join(" ")} style={{ maxHeight: maxHeight, height: height }}>
                {children}
            </div>
        );
    }
}

export default ScrollableContainer;