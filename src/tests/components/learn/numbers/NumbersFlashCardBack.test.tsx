import CommonData from "../../../../types/learn/CommonData";
import JapaneseWord from "../../../../types/learn/JapaneseWord";
import { fireEvent, render } from "@testing-library/react";
import NumbersFlashCardBack from "../../../../components/learn/numbers/NumbersFlashCardBack";

const onResetHandler = jest.fn();

const number = new CommonData(
    "0",
    [new JapaneseWord("れい", "rei"), new JapaneseWord("ゼロ", "zero"), new JapaneseWord("マル", "maru")],
    "一",
    "Number"
);

test('Clicking the reset button should call the onReset event handler', () => {
    const component = render(<NumbersFlashCardBack data={number} onClick={onResetHandler} />);
    fireEvent.click(component.getByTitle('Reset'));
    expect(onResetHandler).toHaveBeenCalled();
});

test('Should render the kanji', () => {
    const component = render(<NumbersFlashCardBack data={number} onClick={onResetHandler} />);
    expect(component.getByText('一')).toBeInTheDocument();
});

test('Should render the kana', () => {
    const component = render(<NumbersFlashCardBack data={number} onClick={onResetHandler} />);
    expect(component.getByText('れい or ゼロ or マル')).toBeInTheDocument();
});

test('Should render the romaji', () => {
    const component = render(<NumbersFlashCardBack data={number} onClick={onResetHandler} />);
    expect(component.getByText('(rei or zero or maru)')).toBeInTheDocument();
});