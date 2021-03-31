import { fireEvent, render } from "@testing-library/react";
import KanaFlashCardFront from "../../../../components/learn/kana/KanaFlashCardFront";
import { Kana } from "../../../../types/Kana";
import KanaType from "../../../../types/KanaType";
import { KanaColumn } from "../../../../types/KanaColumn";

const onClickHandler = jest.fn();

const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);

test('Should call the onClick event handler when clicking the card', () => {
    const component = render(<KanaFlashCardFront kana={kana} onClick={onClickHandler} />);
    fireEvent.click(component.getByText('あ'));
    expect(onClickHandler).toHaveBeenCalled();
});