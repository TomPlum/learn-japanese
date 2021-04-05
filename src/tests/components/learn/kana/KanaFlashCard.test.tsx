import { fireEvent, render, screen } from "@testing-library/react";
import KanaFlashCard from "../../../../components/learn/kana/KanaFlashCard";
import { Kana } from "../../../../types/kana/Kana";
import KanaType from "../../../../types/kana/KanaType";
import { KanaColumn } from "../../../../types/kana/KanaColumn";

const onFlipHandler = jest.fn();

const setup = () => {
    const component = render(
        <KanaFlashCard kana={new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)} onFlip={onFlipHandler}/>
    );
    return {
        card: component.getByText('あ'),
        ...component
    }
}

test('Clicking the card should call the onFlip event handler with 1 flip count', () => {
    const { card } = setup();
    fireEvent.click(card);
    expect(onFlipHandler).toHaveBeenCalledWith(1);
});

test('Flipping a card twice should call the onFlip handler with a flip count of 2', () => {
    const { card } = setup();
    fireEvent.click(card);
    fireEvent.click(screen.getByText('a'));
    fireEvent.click(card);
    expect(onFlipHandler).toHaveBeenCalledWith(2);
});