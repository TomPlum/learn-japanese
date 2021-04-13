import FlashCardFront from "../FlashCardFront";
import { CardFaceProps } from "../FlashCard";
import { Container } from "react-bootstrap";
import { faFillDrip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Colour from "../../../types/colour/Colour";
import styles from "../../../styles/sass/components/learn/basics/ColourFlashCardFront.module.scss";

function ColourFlashCardFront(props: CardFaceProps) {
    const data = props.data as Colour;
    return (
        <FlashCardFront onClick={props.onClick}>
            <Container className={styles.wrapper}>
                <FontAwesomeIcon
                    icon={faFillDrip}
                    fixedWidth
                    color={data.colour}
                    className={styles.icon}
                />
                <p className={styles.name}>{data.getQuestion()}</p>
            </Container>
        </FlashCardFront>
    );
}

export default ColourFlashCardFront;