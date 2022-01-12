import GenkiUnderlineDisplay from "./GenkiUnderlineDisplay";
import styles from "../../../styles/sass/components/ui/display/GenkiExampleDisplay.module.scss";
import { UnderlineStrategy } from "../Underline";

interface Value {
    text: string;
    underline?: UnderlineStrategy;
}

export interface GenkiExampleDisplayProps {
    jp: Value;
    en: Value;
    compare?: Value;
    book: number;
}

const GenkiExampleDisplay = (props: GenkiExampleDisplayProps) => {
    const { jp, en, book, compare } = props;

    return (
        <div className={styles.wrapper}>
            <p className={styles.jp}>
                <GenkiUnderlineDisplay underline={jp.underline} book={book}>
                    <span>{jp.text}</span>
                </GenkiUnderlineDisplay>
            </p>

            <p className={styles.en}>
                <GenkiUnderlineDisplay underline={en.underline} book={book}>
                    <span>{en.text}</span>
                </GenkiUnderlineDisplay>
            </p>

            {compare && (
                <p className={styles.compare}>
                    <GenkiUnderlineDisplay underline={compare.underline} book={book}>
                        <span>{`cf. ${compare.text}`}</span>
                    </GenkiUnderlineDisplay>
                </p>
            )}
        </div>
    );
}

export default GenkiExampleDisplay;
