import GenkiUnderlineDisplay from "./GenkiUnderlineDisplay";
import styles from "../../../styles/sass/components/ui/display/GenkiExampleDisplay.module.scss";

interface Value {
    text: string;
    underline?: string;
}

export interface GenkiExampleDisplayProps {
    jp: Value;
    en: Value;
    book: number;
}

const GenkiExampleDisplay = (props: GenkiExampleDisplayProps) => {
    const { jp, en, book } = props;

    return (
        <div className={styles.wrapper}>
            <p className={styles.jp}>
                <GenkiUnderlineDisplay underline={jp.underline ?? ""} book={book}>
                    <span>{jp.text}</span>
                </GenkiUnderlineDisplay>
            </p>

            <p className={styles.en}>
                <GenkiUnderlineDisplay underline={en.underline ?? ""} book={book}>
                    <span>{en.text}</span>
                </GenkiUnderlineDisplay>
            </p>
        </div>
    );
}

export default GenkiExampleDisplay;
