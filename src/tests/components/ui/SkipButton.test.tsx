import { fireEvent, render } from "@testing-library/react";
import SkipButton from "../../../components/ui/SkipButton";

const onClickHandler = jest.fn();

test('Clicking the button should call the onClick event handler', () => {
    const component = render(<SkipButton onClick={onClickHandler} />);
    fireEvent.click(component.getByText('Skip'));
    expect(onClickHandler).toHaveBeenCalled();
});

test('Passing the disabled prop as true should disable the button', () => {
    const { container } = render(<SkipButton onClick={onClickHandler} disabled={true} />);
    expect(container.firstChild).toBeDisabled();
});

test('Passing the disabled prop as false should not disable the button', () => {
    const { container } = render(<SkipButton onClick={onClickHandler} disabled={false} />);
    expect(container.firstChild).not.toBeDisabled();
});

test('Passing the disabled prop as true should append the \'disabled\' class', () => {
    const { container } = render(<SkipButton onClick={onClickHandler} disabled={true} />);
    expect(container.firstChild).toHaveClass('disabled');
});

test('Passing the disabled prop as false should append the \'button\' class', () => {
    const { container } = render(<SkipButton onClick={onClickHandler} disabled={false} />);
    expect(container.firstChild).toHaveClass('button');
});