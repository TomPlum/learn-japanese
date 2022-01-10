import styles from "../../../styles/sass/components/ui/display/GenkiComparisonDisplay.module.scss";
import GenkiUnderlineDisplay from "./GenkiUnderlineDisplay";
import { FirstMatch } from "../Underline";
import React from "react";

interface Comparison {
    text: string;
    underline?: string;
}

export interface GenkiComparisonDisplayProps {
    pre?: string | React.ReactElement;
    firstComparison: Comparison;
    secondComparison: Comparison;
    post?: string | React.ReactElement;
    meaning: string | React.ReactElement;
    book: number;
}

const GenkiComparisonDisplay = (props: GenkiComparisonDisplayProps) => {

    const { pre, firstComparison, secondComparison, post, meaning, book } = props;

    return (
        <div className={styles.wrapper}>
            <span className={styles.pre}>{pre}</span>
            <span className={styles.brace}>{'{'}</span>
            <div className={styles.comparison}>
                <div>
                    <GenkiUnderlineDisplay underline={new FirstMatch(firstComparison.underline ?? "")} book={book}>
                        <span>{firstComparison.text}</span>
                    </GenkiUnderlineDisplay>
                </div>
                <div>
                    <GenkiUnderlineDisplay underline={new FirstMatch(secondComparison.underline ?? "")} book={book}>
                        <span>{secondComparison.text}</span>
                    </GenkiUnderlineDisplay>
                </div>
            </div>
            <span className={styles.brace}>{'}'}</span>
            <span className={styles.post}>{post}</span>

            <span className={styles.meaning}>{meaning}</span>
        </div>
    );
}

export default GenkiComparisonDisplay;
