import { fireEvent, render } from "@testing-library/react";
import NumbersFlashCardFront from "../../../../components/learn/numbers/NumbersFlashCardFront";
import CommonData from "../../../../types/learn/CommonData";
import JapaneseWord from "../../../../types/learn/JapaneseWord";

const onClickHandler = jest.fn();

const number = new CommonData("1", [new JapaneseWord("いち", "ichi")], "一", "Number");

test('Clicking the card face should call the onClick event handler', () => {
    const component = render(<NumbersFlashCardFront data={number} onClick={onClickHandler} />);
    fireEvent.click(component.getByText('1'));
    expect(onClickHandler).toHaveBeenCalled();
});