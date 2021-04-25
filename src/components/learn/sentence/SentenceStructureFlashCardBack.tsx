import FlashCardBack from "../FlashCardBack";
import { CardFaceProps } from "../FlashCard";
import { SentenceStructureLearnable } from "../../../types/learn/CommonLearnable";
import styles from "../../../styles/sass/components/learn/sentence/SentenceStructureFlashCardBack.module.scss"

const SentenceStructureFlashCardBack = (props: CardFaceProps) => {
    const { data, onClick } = props;

    const value = data as SentenceStructureLearnable;

    return (
        <FlashCardBack title={data.getTitle()} onReset={onClick} className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <p className={styles.kanjiVariation}>{value.getKanjiVariation()}</p>
                <p className={styles.kana}>({value.getKana()})</p>
            </div>
        </FlashCardBack>
    );
};

export default SentenceStructureFlashCardBack;