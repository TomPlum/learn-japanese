import { fireEvent, render } from "@testing-library/react";
import BasicsFlashCardFront from "../../../../components/learn/basics/BasicsFlashCardFront";
import Colour from "../../../../types/colour/Colour";

const onClickHandler = jest.fn();

const colour = new Colour("Red", "赤", "あか", "aka", "#ff0000");

test('Clicking the card face should call the onClick event handler', () => {
    const component = render(<BasicsFlashCardFront data={colour} onClick={onClickHandler} />);
    fireEvent.click(component.getByText('Red'));
    expect(onClickHandler).toHaveBeenCalled();
});

test('Passing a Colour object should render the paint-bucket icon', () => {
    const component = render(<BasicsFlashCardFront data={colour} onClick={onClickHandler} />);
    expect(component.getByTestId('colour-icon')).toBeInTheDocument();
});