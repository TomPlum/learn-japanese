import { CardFaceProps } from "../FlashCard";
import FlashCardBack from "../FlashCardBack";
import styles from "../../../styles/sass/components/learn/calendar/CalendarFlashCardBack.module.scss"

function CalendarFlashCardBack(props: CardFaceProps) {
    const { data, onClick } = props;
    return (
        <FlashCardBack title={data.getTitle()} onReset={onClick}>
            <span className={styles.calendar}>{data.getAnswer()}</span>
        </FlashCardBack>
    );
}

export default CalendarFlashCardBack;