import { fireEvent, render } from "@testing-library/react";
import KanaFlashCardFront from "../../../../components/learn/kana/KanaFlashCardFront";
import { Kana } from "../../../../types/kana/Kana";
import KanaType from "../../../../types/kana/KanaType";
import { KanaColumn } from "../../../../types/kana/KanaColumn";

const onClickHandler = jest.fn();

const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);

test('Should call the onClick event handler when clicking the card', () => {
    const component = render(<KanaFlashCardFront kana={kana} onClick={onClickHandler} />);
    fireEvent.click(component.getByText('あ'));
    expect(onClickHandler).toHaveBeenCalled();
});