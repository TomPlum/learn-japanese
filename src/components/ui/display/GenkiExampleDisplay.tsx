import GenkiUnderlineDisplay from "./GenkiUnderlineDisplay";
import styles from "../../../styles/sass/components/ui/display/GenkiExampleDisplay.module.scss";
import {UnderlineStrategy} from "../Underline";
import FuriganaDisplay, {FuriganaDisplayProps} from "./FuriganaDisplay";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

interface PlainTextValueWithUnderline {
    text: string;
    underline?: UnderlineStrategy;
}

type ValueWithFuriganaSupport = FuriganaDisplayProps;

type Value = PlainTextValueWithUnderline | ValueWithFuriganaSupport;

export interface GenkiExampleDisplayProps {
    jp: Value;
    en: PlainTextValueWithUnderline;
    compare?: PlainTextValueWithUnderline;
    book: number;
    noIndent?: boolean;
    incorrect?: boolean;
}

const GenkiExampleDisplay = (props: GenkiExampleDisplayProps) => {
    const { jp, en, book, compare, noIndent, incorrect } = props;

    const style = noIndent ? { marginLeft: 0 } : {};

    const isPlainText = (value: Value): value is PlainTextValueWithUnderline => {
        return (value as PlainTextValueWithUnderline).text !== undefined;
    }

    const isFurigana = (value: Value): value is ValueWithFuriganaSupport => {
        const casted = value as ValueWithFuriganaSupport;
        return casted.chars !== undefined && casted.position !== undefined;
    }

    return (
        <div className={styles.wrapper} style={style}>
            <div className={styles.jp}>
                {incorrect && <FontAwesomeIcon icon={faTimes} fixedWidth className={styles.incorrect} />}

                {isPlainText(jp) && (
                    <GenkiUnderlineDisplay underline={jp.underline} book={book}>
                        <span>{jp.text}</span>
                    </GenkiUnderlineDisplay>
                )}

                {isFurigana(jp) && (
                   <div className={styles.furiganaDisplay}>
                       <FuriganaDisplay {...jp} />
                   </div>
                )}
            </div>

            <div className={styles.en} style={{ marginLeft: incorrect ? '20px' : 0 }}>
                <GenkiUnderlineDisplay underline={en.underline} book={book}>
                    <span>{en.text}</span>
                </GenkiUnderlineDisplay>
            </div>

            {compare && (
                <div className={styles.compare}>
                    <GenkiUnderlineDisplay underline={compare.underline} book={book}>
                        <span>{`cf. ${compare.text}`}</span>
                    </GenkiUnderlineDisplay>
                </div>
            )}
        </div>
    );
}

export default GenkiExampleDisplay;
