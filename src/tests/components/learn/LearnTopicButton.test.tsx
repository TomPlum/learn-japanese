import { fireEvent, render, screen } from "@testing-library/react";
import LearnTopicButton, { LearnTopicButtonProps } from "../../../components/learn/LearnTopicButton";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import LearnMode from "../../../domain/session/LearnMode";
import { KanaSettingsBuilder } from "../../../domain/session/settings/data/KanaSettings";
import LearnSettings from "../../../domain/session/settings/LearnSettings";

const onClickHandler = jest.fn();

const mode = new LearnMode(1, "Hiragana", "desc", "#fdb40e", "あ", new KanaSettingsBuilder().withHiragana().build(), new LearnSettings(), "Topic");

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
    const component = render(<LearnTopicButton {...props} />);

    return {
        icon: component.getByText('ICON'),
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
    render(<LearnTopicButton {...props} />)
    expect(screen.getByText('Hiragana')).toBeInTheDocument();
});

test('Should have the class \'selected\' when the passed type matches the selected prop', () => {
    const { container } = setup();
    expect(container.firstChild).toHaveClass('selected');
});

test('Should have the class \'notSelected\' when the passed type does not match the selected prop', () => {
    props.selected = new LearnMode(1, "Katakana", "desc", "#fdb40e", "あ", new KanaSettingsBuilder().build(), new LearnSettings(), "Topic");
    const { container } = setup();
    expect(container.firstChild).toHaveClass('notSelected');
});

test('Clicking the button should call the onClick event handler with the passed type', () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(onClickHandler).toHaveBeenCalled();
});
