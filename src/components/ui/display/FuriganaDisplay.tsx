import styles from "../../../styles/sass/components/ui/display/FuriganaDisplay.module.scss";

export interface FuriganaCharacter {
    kanji: string;
    kana: string;
    okurigana?: string;
}

export interface FuriganaDisplayProps {
    chars: FuriganaCharacter[];
    position: 'top' | 'bottom';
    className?: string;
}

const FuriganaDisplay = (props: FuriganaDisplayProps) => {
    const { chars, position, className } = props;

    const wrapperClassNames = [styles.container, className];

    return (
        <div className={wrapperClassNames.join(" ")}>
            {chars.map(info => (
                <div className={styles.infoWrapper}>
                    <div className={styles.charWrapper}>
                        {position === 'top' && <span className={styles.furiganaTop}>{info.kana}</span>}
                        <span className={styles.kanji}>{info.kanji}</span>
                        {position === 'bottom' && <span className={styles.furiganaBottom}>{info.kana}</span>}
                    </div>
                    <span>{info.okurigana}</span>
                </div>
            ))}
        </div>
    );
}

export default FuriganaDisplay;