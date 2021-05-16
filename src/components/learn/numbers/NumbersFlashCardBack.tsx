import { CardFaceProps } from "../FlashCard";
import CommonFlashCardBack from "../CommonFlashCardBack";
import { KanjiLearnable } from "../../../types/learn/Learnable";

const NumbersFlashCardBack = (props: CardFaceProps) => {
    const { data, onClick } = props;

    const value = data as KanjiLearnable;

    return (
        <CommonFlashCardBack
            title={value.getTitle()}
            answer={value.getKanjiVariation() ?? ""}
            kana={value.getKana()}
            example={value.getExample()}
            onClick={onClick}
        />
    );
};

export default NumbersFlashCardBack;