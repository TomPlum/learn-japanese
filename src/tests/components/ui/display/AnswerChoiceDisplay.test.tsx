import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import AnswerChoiceDisplay, { AnswerChoiceDisplayProps } from "../../../../components/ui/display/AnswerChoiceDisplay";

const onClickHandler = jest.fn();
const onMouseDownHandler = jest.fn();
const onMouseUpHandler = jest.fn();
const onMouseOverHandler = jest.fn();
const onMouseOutHandler = jest.fn();
const onTouchStart = jest.fn();
const onTouchEnd = jest.fn();

let props: AnswerChoiceDisplayProps;

beforeEach(() => {
    props = {
        value: "あ",
        onClick: onClickHandler,
        onMouseDown: onMouseDownHandler,
        onMouseUp: onMouseUpHandler,
        onMouseOver: onMouseOverHandler,
        onMouseOut: onMouseOutHandler,
        onTouchStart: onTouchStart,
        onTouchEnd: onTouchEnd
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

test('Mousing down the value should call the onMouseDown event handler', () => {
    render(<AnswerChoiceDisplay {...props} />);
    fireEvent.mouseDown(screen.getByText('あ'));
    expect(onMouseDownHandler).toHaveBeenCalledWith('あ')
});

test('Mousing up the value should call the onMouseUp event handler', () => {
    render(<AnswerChoiceDisplay {...props} />);
    fireEvent.mouseUp(screen.getByText('あ'));
    expect(onMouseUpHandler).toHaveBeenCalledWith('あ');
});

test('Mousing over the value should call the onMouseOver event handler', () => {
    render(<AnswerChoiceDisplay {...props} />);
    fireEvent.mouseOver(screen.getByText('あ'));
    expect(onMouseOverHandler).toHaveBeenCalledWith('あ');
});

test('Mousing out the value should call the onMouseOut event handler', () => {
    render(<AnswerChoiceDisplay {...props} />);
    fireEvent.mouseOut(screen.getByText('あ'));
    expect(onMouseOutHandler).toHaveBeenCalledWith('あ');
});

test('Touching down on the value should call the onTouchStart event handler', () => {
    render(<AnswerChoiceDisplay {...props} />);
    fireEvent.touchStart(screen.getByText('あ'));
    expect(onTouchStart).toHaveBeenCalledWith('あ');
});

test('Touching up on the value should call the onTouchEnd event handler', () => {
    render(<AnswerChoiceDisplay {...props} />);
    fireEvent.touchEnd(screen.getByText('あ'));
    expect(onTouchEnd).toHaveBeenCalledWith('あ');
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

test('Passing a container style prop should cause that class to be applied to the container', () => {
    props.style = { container: ['containerClass'] }
    const { container } = render(<AnswerChoiceDisplay {...props} />);
    expect(container.firstChild).toHaveClass('containerClass');
});

test('Not passing a container style prop should default to the containers default class', () => {
    const { container } = render(<AnswerChoiceDisplay {...props} />);
    expect(container.firstChild).toHaveClass('wrapper');
});

test('If not notifying incorrect, but is blurred, the character should have the \'blur\' class', () => {
    props.blur = true;
    render(<AnswerChoiceDisplay {...props} />);
    expect(screen.getByText('あ')).toHaveClass('blur');
});

test('If the onClick event handler is bound, the character should have the \'clickable\' class', () => {
    render(<AnswerChoiceDisplay {...props} />);
    expect(screen.getByText('あ')).toHaveClass('clickable');
});

test('If the onClick event handler is unbound, the character should not have the \'clickable\' class', () => {
    props.onClick = undefined;
    render(<AnswerChoiceDisplay {...props} />);
    expect(screen.getByText('あ')).not.toHaveClass('clickable');
});
