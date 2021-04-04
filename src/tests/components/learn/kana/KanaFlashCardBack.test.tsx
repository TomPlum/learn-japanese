import { fireEvent, render, screen } from "@testing-library/react";
import KanaFlashCardBack from "../../../../components/learn/kana/KanaFlashCardBack";
import { Kana } from "../../../../types/Kana";
import KanaType from "../../../../types/KanaType";
import { KanaColumn } from "../../../../types/KanaColumn";

const onClickHandler = jest.fn();

const kana = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);

test('Should call the onClick event handler when clicking the reset button', () => {
    const component = render(<KanaFlashCardBack kana={kana} onClick={onClickHandler} />);
    fireEvent.click(component.getByTitle('Reset'));
    expect(onClickHandler).toHaveBeenCalled();
});

test('Should render the kana type', () => {
    render(<KanaFlashCardBack kana={kana} onClick={onClickHandler} />);
    expect(screen.getByText('Hiragana')).toBeInTheDocument();
});

test('Should render the romaji', () => {
    render(<KanaFlashCardBack kana={kana} onClick={onClickHandler} />);
    expect(screen.getByText('a')).toBeInTheDocument();
});