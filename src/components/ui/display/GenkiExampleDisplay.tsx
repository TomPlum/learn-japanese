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

    const underlineValue = (example: Value) => {
        const underlineText = example.underline;
        if (underlineText) {
            const value = example.text;
            const underlineStartIndex = value.indexOf(underlineText);
            const start = value.substring(0, underlineStartIndex);
            const underlineEndIndex = underlineStartIndex + underlineText.length;
            const underlined = value.substring(underlineStartIndex, underlineEndIndex);
            const remaining = value.substring(underlineEndIndex);

            const underlineClass = book == 1 ? styles.genkiOneUnderline : styles.genkiTwoUnderline;
            return <span>{start}<span className={underlineClass}>{underlined}</span>{remaining}</span>
        }

        return <span>{example.text}</span>
    }

    return (
        <div className={styles.wrapper}>
            <p className={styles.jp}>{underlineValue(jp)}</p>
            <p className={styles.en}>{underlineValue(en)}</p>
        </div>
    );
}

export default GenkiExampleDisplay;
