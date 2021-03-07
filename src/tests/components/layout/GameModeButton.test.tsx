import { fireEvent, render } from "@testing-library/react";
import GameModeButton, { GameModeButtonProps } from "../../../components/layout/GameModeButton";
import { GameMode } from "../../../types/GameMode";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const onClickHandler = jest.fn();

let props: GameModeButtonProps;

beforeEach(() => {
    props = {
        mode: GameMode.RELAXED,
        isSelected: true,
        icon: faGraduationCap,
        onClick: onClickHandler
    };
});

const setup = () => {
    const component = render(<GameModeButton {...props} />);
    return {
        button: component.getByText('Relaxed'),
        ...component
    }
}

test('Clicking the button should call the onClick event handler', () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(onClickHandler).toHaveBeenCalled();
});

test('Passing selected as true should set the buttons class as \'selected\'', () => {
    props.isSelected = true;
    const { container } = setup();
    expect(container.firstChild).toHaveClass('selected');
});

test('Passing selected as false should set the buttons class as \'notSelected\'', () => {
    props.isSelected = false;
    const { container } = setup();
    expect(container.firstChild).toHaveClass('notSelected');
});

test('Passing an iconColour prop when the button is selected should set the icon colour', () => {
    props.iconColour = "#dd2727";
    const { container } = setup();
    expect(container.firstChild?.firstChild).toHaveAttribute('color', '#dd2727');
});