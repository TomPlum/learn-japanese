import { CardFaceProps } from "../FlashCard";
import FlashCardFront from "../FlashCardFront";
import { SentenceStructureLearnable } from "../../../types/learn/CommonLearnable";
import styles from "../../../styles/sass/components/learn/sentence/SentenceStructureFlashCardFront.module.scss";

const SentenceStructureFlashCardFront = (props: CardFaceProps) => {
    const { data, onClick } = props;

    const value = data as SentenceStructureLearnable;

    return (
        <FlashCardFront onClick={onClick} className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                {value.getMeanings().map((meaning: string, i: number) => {
                    if (i < value.getMeanings().length - 1) {
                        return (
                            <>
                                <p className={styles.meaning}>{meaning}</p>
                                <p className={styles.or}> or</p>
                            </>
                        );
                    } else {
                        return <p className={styles.meaning}> {meaning}</p>
                    }
                })}
            </div>
        </FlashCardFront>
    )
};

export default SentenceStructureFlashCardFront;