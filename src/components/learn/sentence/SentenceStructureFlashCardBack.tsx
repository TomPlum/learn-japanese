import FlashCardBack from "../FlashCardBack";
import { CardBackFaceProps } from "../FlashCard";
import RomajiDisplay from "../../ui/RomajiDisplay";
import Copyable from "../../ui/Copyable";
import KanjiWordDisplay from "../../ui/KanjiWordDisplay";
import { KanjiLearnable } from "../../../types/learn/Learnable";
import styles from "../../../styles/sass/components/learn/sentence/SentenceStructureFlashCardBack.module.scss"

const SentenceStructureFlashCardBack = (props: CardBackFaceProps) => {
    const { data, onClick } = props;

    const value = data as KanjiLearnable;
    const kanjiVariation = value.getKanjiVariation();

    return (
        <FlashCardBack title={data.getTitle()} onReset={onClick} className={styles.wrapper}>
            <div className={styles.innerWrapper}>
                {kanjiVariation && <KanjiWordDisplay
                    className={styles.kanjiVariation}
                    value={kanjiVariation}
                />}

                <Copyable className={styles.kana}>
                    <span>{value.getKana()}</span>
                </Copyable>

                {props.showRomaji &&
                    <RomajiDisplay kana={value.getKana()[0]} className={styles.romaji} />
                }
            </div>
        </FlashCardBack>
    );
};

export default SentenceStructureFlashCardBack;