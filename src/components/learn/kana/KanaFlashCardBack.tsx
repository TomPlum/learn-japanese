import FlashCardBack from "../FlashCardBack";
import { CardFaceProps } from "../FlashCard";
import styles from "../../../styles/sass/components/learn/kana/KanaFlashCardBack.module.scss"

const KanaFlashCardBack = (props: CardFaceProps) => {
    const { data, onClick } = props;

    return (
        <FlashCardBack title={data.getTitle()} onReset={onClick} className={styles.wrapper}>
            <span className={styles.romaji}>{data.getAnswer()}</span>
        </FlashCardBack>
    );
};

export default KanaFlashCardBack;