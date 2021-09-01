import styles from "../../styles/sass/components/ui/ScrollableContainer.module.scss";
import { PropsWithChildren } from "react";

export interface ScrollableContainerProps {
    className?: string;
    maxHeight?: number;
    height?: number;
    hideScrollBar?: boolean;
}

const ScrollableContainer = (props: PropsWithChildren<ScrollableContainerProps>) => {
    const { className, maxHeight, height, hideScrollBar, children } = props;

    const classes = [styles.container, className];

    if (hideScrollBar) {
        classes.push(styles.hideScroll);
    }

    return (
        <div className={classes.join(" ")} style={{ maxHeight: maxHeight, height: height }}>
            {children}
        </div>
    );
}

export default ScrollableContainer;