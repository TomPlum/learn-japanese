import { fireEvent, render } from "@testing-library/react";
import SubmitButton from "../../../components/ui/SubmitButton";

const onClickHandler = jest.fn();

test('Should render \'check\' by default', () => {
    const component = render(<SubmitButton onClick={onClickHandler} />);
    expect(component.getByText('Check')).toBeInTheDocument();
});

test('Should render \'restart\' if the isRestart property is true', () => {
    const component = render(<SubmitButton onClick={onClickHandler} isRestart={true} />);
    expect(component.getByText('Restart')).toBeInTheDocument();
});

test('Clicking the button should call the onClick event handler', () => {
    const component = render(<SubmitButton onClick={onClickHandler} />);
    fireEvent.click(component.getByText('Check'));
    expect(onClickHandler).toHaveBeenCalled();
});