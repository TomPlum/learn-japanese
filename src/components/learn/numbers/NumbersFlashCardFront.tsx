import { CardFaceProps } from "../FlashCard";
import FlashCardFront from "../FlashCardFront";
import styles from "../../../styles/sass/components/learn/numbers/NumbersFlashCardFront.module.scss";

const NumbersFlashCardFront = (props: CardFaceProps) => {
    const { data, onClick } = props;

    return (
        <FlashCardFront onClick={onClick} className={styles.wrapper}>
            <p className={styles.value}>{data.getQuestion()}</p>
        </FlashCardFront>
    )
};

export default NumbersFlashCardFront;