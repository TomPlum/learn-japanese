import { fireEvent, render, screen } from "@testing-library/react";
import SkipButton from "../../../../components/ui/buttons/SkipButton";
import each from "jest-each";

const onClickHandler = jest.fn();

const props = {
    size: {
        height: 25,
        width: 70,
    }
};

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

each(
    [undefined, null, 105, 50]
).test('Passing falsy width or less than 106px should default to -1 and not display the icon', (width: number) => {
    props.size.width = width;
    render(<SkipButton onClick={onClickHandler} disabled={false} {...props} />);
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
});

test('Passing a width greater than 105 should display the icon', () => {
    props.size.width = 106;
    render(<SkipButton onClick={onClickHandler} disabled={false} {...props} />);
    expect(screen.queryByTestId('icon')).toBeInTheDocument();
});