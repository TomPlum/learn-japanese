import { CardFaceProps } from "../FlashCard";
import FlashCardFront from "../FlashCardFront";
import { KanjiLearnable } from "../../../types/learn/Learnable";
import styles from "../../../styles/sass/components/learn/sentence/SentenceStructureFlashCardFront.module.scss";

const SentenceStructureFlashCardFront = (props: CardFaceProps) => {
    const { data, onClick } = props;

    const value = data as KanjiLearnable;

    return (
        <FlashCardFront onClick={onClick} className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                {value.getMeanings()?.map((meaning: string, i: number) => {
                    if (i < value.getMeanings()!.length - 1) {
                        return (
                            <div key={i}>
                                <p className={styles.meaning}>{meaning}</p>
                                <p className={styles.or}> or</p>
                            </div>
                        );
                    } else {
                        return <p className={styles.meaning} key={i}> {meaning}</p>
                    }
                })}
            </div>
        </FlashCardFront>
    )
};

export default SentenceStructureFlashCardFront;