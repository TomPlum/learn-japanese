import FlashCardFront from "../../FlashCardFront"
import { CardFaceProps } from "../../FlashCard"
import { Container } from "react-bootstrap"
import { faFillDrip } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Colour from "../../../../domain/colour/Colour"
import styles  from "./BasicsFlashCardFront.module.scss"
import DefinitionList from "../../DefinitionList"

function BasicsFlashCardFront(props: CardFaceProps) {
  return (
    <FlashCardFront onClick={props.onClick} borderColour={props.data instanceof Colour ? props.data.colour : undefined}>
      <Container className={styles.wrapper}>
        {props.data instanceof Colour && (
          <div className={styles.iconWrapper}>
            <FontAwesomeIcon
              icon={faFillDrip}
              fixedWidth
              color={props.data.colour}
              className={styles.icon}
              data-testid="colour-icon"
            />
          </div>
        )}
        <DefinitionList words={props.data.getMeanings()} mode="stacked" />
      </Container>
    </FlashCardFront>
  )
}

export default BasicsFlashCardFront
