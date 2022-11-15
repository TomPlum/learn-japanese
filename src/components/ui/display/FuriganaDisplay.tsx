import styles from "../../../styles/sass/components/ui/display/FuriganaDisplay.module.scss";

export type FuriganaPosition = 'top' | 'bottom';

export interface FuriganaCharacter {
    post?: string;
    pre?: string;
    kanji: string;
    kana: string;
    okurigana?: string;
}

export interface FuriganaDisplayProps {
    chars: FuriganaCharacter[];
    position: FuriganaPosition;
    className?: string;
    style?: {};
}

const FuriganaDisplay = (props: FuriganaDisplayProps) => {
    const { chars, position, style, className } = props;

    const wrapperClassNames = [styles.container, className];

    return (
        <div className={wrapperClassNames.join(" ")} style={style} data-testid="furigana-display">
            {chars.map(info => {
                const directionalFuriganaClass = position === 'top' ? styles.furiganaTop : styles.furiganaBottom;
                const sizeFuriganaClass = info.kana.length === 1 ? styles.sizeBig : styles.sizeSmall;
                const furiganaClasses = [directionalFuriganaClass, sizeFuriganaClass];

                return (
                    <span className={styles.infoWrapper}>
                        <span>{info.pre}</span>
                        <span className={styles.charWrapper}>
                            <span className={styles.kanji}>{info.kanji}</span>
                            <span className={furiganaClasses.join(" ")}>{info.kana}</span>
                        </span>
                        <span>{info.okurigana}</span>
                        <span>{info.post}</span>
                    </span>
                );
            })}
        </div>
    );
}

export default FuriganaDisplay;