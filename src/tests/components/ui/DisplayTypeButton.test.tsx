import { fireEvent, render } from "@testing-library/react";
import DisplayTypeButton, { DisplayTypeButtonProps } from "../../../components/ui/DisplayTypeButton";
import { DisplayType } from "../../../types/DisplayType";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const onClickHandler = jest.fn();

let props: DisplayTypeButtonProps;

beforeEach(() => {
    props = {
        type: DisplayType.KANA,
        selected: DisplayType.KANA,
        icon: faCircle,
        onClick: onClickHandler
    };
});

const setup = () => {
    const component  = render(<DisplayTypeButton {...props} />);
    return {
        button: component.getByText('Kana'),
        ...component
    }
}

test('Clicking the button should call the onClick event handler', () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(onClickHandler).toHaveBeenCalled();
});

test('Passing selected the same as type should append the selected class', () => {
    const { container } = setup();
    expect(container.firstChild).toHaveClass('selected');
});

test('Passing selected different from type should append the notSelected class', () => {
    props.selected = DisplayType.ROMAJI;
    const { container } = setup();
    expect(container.firstChild).toHaveClass('notSelected');
});