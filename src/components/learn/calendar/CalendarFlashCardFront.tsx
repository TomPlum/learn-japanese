import { CardFaceProps } from "../FlashCard";
import FlashCardFront from "../FlashCardFront";
import styles from "../../../styles/sass/components/learn/calendar/CalendarFlashCardFront.module.scss";

const CalendarFlashCardFront = (props: CardFaceProps) => {
    const { data, onClick } = props;
    return (
        <FlashCardFront onClick={onClick}>
            <span className={styles.calendar}>{data.getQuestion()}</span>
        </FlashCardFront>
    );
};

export default CalendarFlashCardFront;