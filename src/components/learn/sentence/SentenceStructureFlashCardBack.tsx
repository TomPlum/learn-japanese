import FlashCardBack from "../FlashCardBack";
import { CardBackFaceProps } from "../FlashCard";
import { SentenceStructureLearnable } from "../../../types/learn/CommonLearnable";
import RomajiDisplay from "../../ui/RomajiDisplay";
import Copyable from "../../ui/Copyable";
import styles from "../../../styles/sass/components/learn/sentence/SentenceStructureFlashCardBack.module.scss"

const SentenceStructureFlashCardBack = (props: CardBackFaceProps) => {
    const { data, onClick } = props;

    const value = data as SentenceStructureLearnable;

    return (
        <FlashCardBack title={data.getTitle()} onReset={onClick} className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                <Copyable className={styles.kanjiVariation} placement="top">
                    <span>{value.getKanjiVariation()}</span>
                </Copyable>

                <Copyable className={styles.kana}>
                    <span>{value.getKana()}</span>
                </Copyable>

                {props.showRomaji &&
                    <RomajiDisplay kana={value.getKana()} className={styles.romaji} />
                }
            </div>
        </FlashCardBack>
    );
};

export default SentenceStructureFlashCardBack;