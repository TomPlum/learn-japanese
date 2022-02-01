import styles from "../../../styles/sass/components/ui/display/GenkiComparisonDisplay.module.scss";
import GenkiUnderlineDisplay from "./GenkiUnderlineDisplay";
import { FirstMatch } from "../Underline";
import React from "react";

interface Comparison {
    text: string;
    underline?: string;
    description?: string;
}

export interface GenkiComparisonDisplayProps {
    pre?: string | React.ReactElement;
    firstComparison: Comparison;
    secondComparison: Comparison;
    thirdComparison?: Comparison;
    post?: string | React.ReactElement;
    meaning?: string | React.ReactElement;
    ignoreFirstBrace?: boolean;
    ignoreSecondBrace?: boolean;
    centerComparisons?: boolean;
    noPadding?: boolean;
    book: number;
}

const GenkiComparisonDisplay = (props: GenkiComparisonDisplayProps) => {

    const {
        pre, firstComparison, secondComparison, thirdComparison, post, meaning, book, ignoreFirstBrace,
        ignoreSecondBrace, centerComparisons, noPadding
    } = props;

    return (
        <div className={styles.wrapper} style={{ padding: noPadding ? 0 : undefined }}>
            <span className={styles.pre}>{pre}</span>
            {!ignoreFirstBrace && <span className={styles.brace}>{'{'}</span>}

            <div className={styles.comparison} style={{ textAlign: centerComparisons ? "center" : "start" }}>
                <div>
                    <GenkiUnderlineDisplay underline={new FirstMatch(firstComparison.underline ?? "")} book={book}>
                        <span>{firstComparison.text}</span>
                    </GenkiUnderlineDisplay>
                    {firstComparison.description && (
                        <span className={styles.desc}>{firstComparison.description}</span>
                    )}
                </div>

                <div>
                    <GenkiUnderlineDisplay underline={new FirstMatch(secondComparison.underline ?? "")} book={book}>
                        <span>{secondComparison.text}</span>
                    </GenkiUnderlineDisplay>
                    {secondComparison.description && (
                        <span className={styles.desc}>{secondComparison.description}</span>
                    )}
                </div>

                {thirdComparison && (
                    <div>
                        <GenkiUnderlineDisplay underline={new FirstMatch(thirdComparison.underline ?? "")} book={book}>
                            <span>{thirdComparison.text}</span>
                        </GenkiUnderlineDisplay>
                        {thirdComparison.description && (
                            <span className={styles.desc}>{thirdComparison.description}</span>
                        )}
                    </div>
                )}
            </div>

            {!ignoreSecondBrace && <span className={styles.brace}>{'}'}</span>}
            <span className={styles.post}>{post}</span>

            {meaning && <span className={styles.meaning}>{meaning}</span>}
        </div>
    );
}

export default GenkiComparisonDisplay;
