import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import AnswerChoiceDisplay, { AnswerChoiceDisplayProps } from "../../../../components/ui/display/AnswerChoiceDisplay";

const onClickHandler = jest.fn();

let props: AnswerChoiceDisplayProps;

beforeEach(() => {
    props = {
        value: "あ",
        onClick: onClickHandler
    };
});

test('Should display value', () => {
    render(<AnswerChoiceDisplay {...props} />);
    expect(screen.getByText('あ')).toBeInTheDocument();
});

test('Clicking the value should call the onClick event handler', () => {
    render(<AnswerChoiceDisplay {...props} />);
    fireEvent.click(screen.getByText('あ'));
    expect(onClickHandler).toHaveBeenCalled();
});

test('Passing the index property when the display is not blurred should render the index', () => {
    props.index = 2;
    props.blur = false;
    render(<AnswerChoiceDisplay {...props} />);
    expect(screen.getByText('2')).toBeInTheDocument();
});

test('Passing the index property when the display is blurred should not show the index', () => {
    props.index = 2;
    props.blur = true;
    render(<AnswerChoiceDisplay {...props} />);
    expect(screen.queryByText('2')).toHaveProperty('style._values.visibility', 'hidden');
});

test('Notify incorrect should append the \'red\' class to the value', () => {
    const ref = React.createRef<AnswerChoiceDisplay>();
    const { container, rerender } = render(<AnswerChoiceDisplay {...props} ref={ref}/>);

    //Initially should have the regular kana class
    expect(container?.firstChild?.childNodes[1]).toHaveClass('value');

    //Calling notifyIncorrect should append the redKana class
    ref.current?.notifyIncorrect();
    expect(container?.firstChild?.childNodes[1]).toHaveClass('red');

    //Upon next render, it should switch back to the kana class again
    rerender(<AnswerChoiceDisplay {...props} ref={ref}/>);
    expect(container?.firstChild?.childNodes[1]).toHaveClass('value');
});

test('Passing a container style prop should cause that class to be applied to the container', () => {
    props.style = { container: 'containerClass' }
    const { container } = render(<AnswerChoiceDisplay {...props} />);
    expect(container.firstChild).toHaveClass('containerClass');
});

test('Not passing a container style prop should default to the containers default class', () => {
    const { container } = render(<AnswerChoiceDisplay {...props} />);
    expect(container.firstChild).toHaveClass('wrapper');
});

test('If not notifying incorrect, but is blurred, the character should have the \'blur\' class', () => {
    props.blur = true;
    const { container } = render(<AnswerChoiceDisplay {...props} />);
    expect(container?.firstChild?.childNodes[1]).toHaveClass('blur');
});

test('If the onClick event handler is bound, the character should have the \'clickable\' class', () => {
    const { container } = render(<AnswerChoiceDisplay {...props} />);
    expect(container?.firstChild?.childNodes[1]).toHaveClass('clickable');
});

test('If the onClick event handler is unbound, the character should not have the \'clickable\' class', () => {
    props.onClick = undefined;
    const { container } = render(<AnswerChoiceDisplay {...props} />);
    expect(container?.firstChild?.childNodes[1]).not.toHaveClass('clickable');
});