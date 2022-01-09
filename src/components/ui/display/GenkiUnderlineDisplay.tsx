import { PropsWithChildren } from "react";
import ComponentTree from "../../../utility/ComponentTree";
import Underline from "../Underline";
import styles from "../../../styles/sass/components/ui/display/GenkiUnderlineDisplay.module.scss";

export interface GenkiUnderlineDisplayProps {
    underline: string;
    book: number;
}

const GenkiUnderlineDisplay = (props: PropsWithChildren<GenkiUnderlineDisplayProps>) => {
    const { underline, book, children } = props;
    const value: string = new ComponentTree(children).getDeepestLeafNode();
    const underlineClass = book == 1 ? styles.genkiOneUnderline : styles.genkiTwoUnderline;

    return (
        <Underline underline={underline} underlineClass={underlineClass}>
            <span>{value}</span>
        </Underline>
    );
}

export default GenkiUnderlineDisplay;
