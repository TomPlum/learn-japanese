import { fireEvent, render, screen } from "@testing-library/react";
import AppModeButton from "../../../components/ui/AppModeButton";
import { AppMode } from "../../../types/AppMode";

const onClickHandler = jest.fn();

test('The button should use the given mode prop', () => {
    render(<AppModeButton onClick={onClickHandler} disabled={false} mode={AppMode.LEARN} />);
    expect(screen.getByText('Play')).toBeInTheDocument();
});

test('Clicking the button should change \'Learn\' mode and display the \'Play\' text and icon', () => {
    const component = render(<AppModeButton onClick={onClickHandler} disabled={false} mode={AppMode.PLAY} />);
    fireEvent.click(component.getByText('Learn'));
    expect(screen.getByText('Play')).toBeInTheDocument();
});

test('Clicking the button should change \'Play\' mode and display the \'Learn\' text and icon', () => {
    const component = render(<AppModeButton onClick={onClickHandler} disabled={false} mode={AppMode.LEARN}/>);
    fireEvent.click(component.getByText('Play'));
    expect(screen.getByText('Learn')).toBeInTheDocument();
});

test('Clicking the button should call the onClick event handler with the other mode', () => {
    const component = render(<AppModeButton onClick={onClickHandler} disabled={false} mode={AppMode.PLAY} />);
    fireEvent.click(component.getByText('Learn'));
    expect(onClickHandler).toHaveBeenCalledWith(AppMode.LEARN);
});

test('Passing disabled as true should disable the button', () => {
    const { container } = render(<AppModeButton onClick={onClickHandler} disabled={true} mode={AppMode.LEARN} />);
    const button = container.firstChild;
    expect(button).toHaveAttribute('aria-disabled', 'true');
});

test('Passing disabled as false should enable the button', () => {
    const { container } = render(<AppModeButton onClick={onClickHandler} disabled={false} mode={AppMode.PLAY} />);
    const button = container.firstChild;
    expect(button).not.toHaveAttribute('aria-disabled');
});