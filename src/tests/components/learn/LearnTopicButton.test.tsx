import { fireEvent, render } from "@testing-library/react";
import LearnTopicButton, { LearnTopicButtonProps } from "../../../components/learn/LearnTopicButton";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import LearnKanaModes from "../../../types/learn/mode/LearnKanaModes";

const onClickHandler = jest.fn();

const mode = new LearnKanaModes().getModes()[0];

let props: LearnTopicButtonProps;

beforeEach(() => {
    props = {
        icon: "ICON",
        type: mode,
        selected: mode,
        onClick: onClickHandler
    }
});

const setup = () => {
    const component = render(
        <LearnTopicButton {...props} />
    );

    return {
        icon: component.getByText('Icon'),
        button: component.getByText('Hiragana'),
        ...component
    }
}

test('Should accept string icon', () => {
   const { button, icon } = setup();
    expect(icon).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});

test('Should accept Font Awesome icon', () => {
    props.icon = faCircle;
    const { button } = setup();
    expect(button).toBeInTheDocument();
});

test('Should have the class \'selected\' when the passed type matches the selected prop', () => {
    const { container } = setup();
    expect(container.firstChild).toHaveClass('selected');
});

test('Should have the class \'notSelected\' when the passed type does not match the selected prop', () => {
    const { container } = setup();
    expect(container.firstChild).toHaveClass('notSelected');
});

test('Clicking the button should call the onClick event handler with the passed type', () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(onClickHandler).toHaveBeenCalled();
});
