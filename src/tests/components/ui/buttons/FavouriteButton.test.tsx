import { fireEvent, render, screen } from "@testing-library/react";
import FavouriteButton, { FavouriteButtonProps } from "../../../../components/ui/buttons/FavouriteButton";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { Numbers } from "../../../../utility/Numbers";
import PlayMode from "../../../../domain/session/PlayMode";
import { KanaSettingsBuilder } from "../../../../domain/session/settings/data/KanaSettings";
import { GameSettingsBuilder } from "../../../../domain/session/settings/game/GameSettings";

const onStartHandler = jest.fn();
const onDeleteHandler = jest.fn();

let props: FavouriteButtonProps;

const setup = () => {
    const component = render(<FavouriteButton {...props} />);
    return {
        ...component
    }
}

beforeEach(() => {
    props = {
        preset: new PlayMode(1, "Test Button", "ffffff", faApple, new KanaSettingsBuilder().build(), new GameSettingsBuilder().build()),
        editing: false,
        className: "myClass",
        onStart: onStartHandler,
        onDelete: onDeleteHandler
    };

    jest.useFakeTimers();

    Numbers.randomInt = jest.fn().mockImplementation(() => 150);
});

test('Should render the name of the button', () => {
    setup();
    expect(screen.getByText('Test Button')).toBeInTheDocument();
});

test('Should add the shake class after a random time', () => {
    // Set editing mode
    props.editing = true;
    const { container } = setup();

    // Shouldn't start with the class
    expect(container.firstChild).not.toHaveClass('shake');

    // Advancing the timer to fire the timeout should cause it set the class
    jest.advanceTimersByTime(150);
    expect(container.firstChild).toHaveClass('shake');
});

test('Should render the start text when hovering over the button if not in edit mode', () => {
    props.editing = false;
    const { container } = setup();

    // Mouse enter the listening surface div
    fireEvent.mouseEnter(container.firstChild?.firstChild!);

    // Should stop rendering the preset name and show the start text
    expect(screen.queryByText('Test Button')).not.toBeInTheDocument();
    expect(screen.getByText('Start')).toBeInTheDocument();

    // Mouse out of the listening surface div
    fireEvent.mouseOut(container.firstChild?.firstChild!);

    // Should stop rendering the start text and re-render the preset name
    expect(screen.getByText('Test Button')).toBeInTheDocument();
    expect(screen.queryByText('Start')).not.toBeInTheDocument();
});

test('Should NOT render the start text when hovering over the button if in edit mode', () => {
    props.editing = true;
    const { container } = setup();

    // Mouse enter the listening surface div
    fireEvent.mouseEnter(container.firstChild?.firstChild!);

    // Should not render the start text, and keep the name
    expect(screen.queryByText('Start')).not.toBeInTheDocument();
    expect(screen.getByText('Test Button')).toBeInTheDocument();
});

test('Clicking the button when not in edit mode should call the onStart event handler', () => {
    props.editing = false;
    const { container } = setup();

    // Mouse enter the listening surface div
    const surface = container.firstChild?.firstChild!;
    fireEvent.mouseEnter(surface);

    // Clicking the button should call the event handler
    fireEvent.click(surface);
    expect(onStartHandler).toHaveBeenCalled();
});

test('Clicking the button when not in edit mode should NOT call the onStart event handler', () => {
    props.editing = true;
    const { container } = setup();

    // Mouse enter the listening surface div
    const surface = container.firstChild?.firstChild!;
    fireEvent.mouseEnter(surface);

    // Clicking the button should NOT call the event handler
    fireEvent.click(surface);
    expect(onStartHandler).not.toHaveBeenCalled();
});

test('Clicking the delete button while in edit mode should call the onDelete event handler', () => {
    props.editing = true;
    setup();

    fireEvent.click(screen.getByTitle('Delete'));
    expect(onDeleteHandler).toHaveBeenCalled();
});
