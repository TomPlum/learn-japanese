import { fireEvent, render } from "@testing-library/react";
import KanjiFlashCardFront from "../../../../components/learn/kanji/KanjiFlashCardFront";
import { Kanji } from "../../../../types/kanji/Kanji";
import { Reading } from "../../../../types/kanji/Reading";
import { ReadingType } from "../../../../types/kanji/ReadingType";
import { KyoikuGrade } from "../../../../types/kanji/KyoikuGrade";
import { Example } from "../../../../types/kanji/Example";

const onClickHandler = jest.fn();

const kanji = new Kanji(
    "人",
    [new Reading("jin", "じん", ReadingType.ON), new Reading("hito", "ひと", ReadingType.KUN)],
    ["person"],
    KyoikuGrade.ONE,
    "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
    [new Example("外国人", ["がいこくじん"], ["foreigner"])]
);

test('Should call the onClick event handler when clicking the card', () => {
    const component = render(<KanjiFlashCardFront data={kanji} onClick={onClickHandler} />);
    fireEvent.click(component.getByText('人'));
    expect(onClickHandler).toHaveBeenCalled();
});