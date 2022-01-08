import styles from "../../../styles/sass/components/ui/display/GenkiComparisonDisplay.module.scss";

interface Comparison {
    text: string;
    underline?: string;
}

export interface GenkiComparisonDisplayProps {
    pre?: string;
    firstComparison: Comparison;
    secondComparison: Comparison;
    post?: string;
    meaning: string;
    book: number;
}

const GenkiComparisonDisplay = (props: GenkiComparisonDisplayProps) => {

    const { pre, firstComparison, secondComparison, post, meaning, book } = props;

    const underlineClass = book == 1 ? styles.genkiOneUnderline : styles.genkiTwoUnderline;

    const underlineValue = (example: Comparison) => {
        const underlineText = example.underline;
        if (underlineText) {
            const value = example.text;
            const underlineStartIndex = value.indexOf(underlineText);
            const start = value.substring(0, underlineStartIndex);
            const underlineEndIndex = underlineStartIndex + underlineText.length;
            const underlined = value.substring(underlineStartIndex, underlineEndIndex);
            const remaining = value.substring(underlineEndIndex)
            return <span>{start}<span className={underlineClass}>{underlined}</span>{remaining}</span>
        }

        return <span>{example.text}</span>
    }

    return (
        <div className={styles.wrapper}>
            <span className={styles.pre}>{pre}</span>
            <span className={styles.brace}>{'{'}</span>
            <div className={styles.comparison}>
                <div>
                    {underlineValue(firstComparison)}
                </div>
                <div>
                    {underlineValue(secondComparison)}
                </div>
            </div>
            <span className={styles.brace}>{'}'}</span>
            <span className={styles.post}>{post}</span>

            <span className={styles.meaning}>{meaning}</span>
        </div>
    );
}

export default GenkiComparisonDisplay;
