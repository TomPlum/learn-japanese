import { CardFaceProps } from "../FlashCard";
import FlashCardFront from "../FlashCardFront";
import styles from "../../../styles/sass/components/learn/calendar/CalendarFlashCardFront.module.scss";
import DefinitionList from "../DefinitionList";

const CalendarFlashCardFront = (props: CardFaceProps) => {
    const { data, onClick } = props;
    return (
        <FlashCardFront onClick={onClick} className={styles.wrapper}>
            <DefinitionList words={data.getMeanings()} mode="stacked" />
        </FlashCardFront>
    );
};

export default CalendarFlashCardFront;