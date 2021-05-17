import { CardFaceProps } from "../FlashCard";
import FlashCardFront from "../FlashCardFront";
import { KanjiLearnable } from "../../../types/learn/Learnable";
import styles from "../../../styles/sass/components/learn/sentence/SentenceStructureFlashCardFront.module.scss";
import DefinitionList from "../DefinitionList";

const SentenceStructureFlashCardFront = (props: CardFaceProps) => {
    const { data, onClick } = props;

    const value = data as KanjiLearnable;

    return (
        <FlashCardFront onClick={onClick} className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <DefinitionList words={value.getMeanings()} mode="stacked" />
            </div>
        </FlashCardFront>
    )
};

export default SentenceStructureFlashCardFront;