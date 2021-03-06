import { CardFaceProps } from "../FlashCard";
import Colour from "../../../types/colour/Colour";
import CommonFlashCardBack from "../CommonFlashCardBack";

function BasicsFlashCardBack(props: CardFaceProps) {
    const value = props.data as Colour;

    return (
        <CommonFlashCardBack
            title={value.getTitle()}
            answer={value.getKanjiVariation()}
            kana={value.getKana()}
            onClick={props.onClick}
            borderColour={props.data instanceof Colour ? props.data.colour : undefined}
        />
    );
}

export default BasicsFlashCardBack;