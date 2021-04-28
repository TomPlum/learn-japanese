import { fireEvent, render } from "@testing-library/react";
import StartButton from "../../../../components/ui/buttons/StartButton";

const onClickHandler = jest.fn();

test('Clicking the button should call the onClick event handler', () => {
    const component = render(<StartButton onClick={onClickHandler} />);
    fireEvent.click(component.getByText('Start'));
    expect(onClickHandler).toHaveBeenCalled();
});