import { CardFaceProps } from "../FlashCard";
import CommonFlashCardBack from "../CommonFlashCardBack";
import { KanjiLearnable } from "../../../types/learn/CommonLearnable";

const NumbersFlashCardBack = (props: CardFaceProps) => {
    const { data, onClick } = props;

    const value = data as KanjiLearnable;

    return (
        <CommonFlashCardBack
            title={value.getTitle()}
            answer={value.getKanji()}
            words={value.getWords()}
            example={value.getExample()}
            onClick={onClick}
        />
    );
};

export default NumbersFlashCardBack;