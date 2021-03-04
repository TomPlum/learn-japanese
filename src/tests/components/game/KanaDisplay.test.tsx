import { fireEvent, render, screen } from "@testing-library/react";
import KanaDisplay, { KanaDisplayProps } from "../../../components/game/KanaDisplay";
import { Kana } from "../../../types/Kana";
import KanaType from "../../../types/KanaType";
import { KanaColumn } from "../../../types/KanaColumn";
import React from "react";

const onClickHandler = jest.fn();

let props: KanaDisplayProps;

beforeEach(() => {
    props = {
        kana: new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
        onClick: onClickHandler
    };
});

test('Regular kana should display a single character', () => {
    render(<KanaDisplay {...props} />);
    expect(screen.getByText('あ')).toBeInTheDocument();
});

test('Diagraph should display both characters separately', () => {
    props.kana = new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true);
    render(<KanaDisplay {...props} />);
    expect(screen.getByText('び')).toBeInTheDocument();
    expect(screen.getByText('ゃ')).toBeInTheDocument();
});

test('Clicking the kana should call the onClick event handler', () => {
    render(<KanaDisplay {...props} />);
    fireEvent.click(screen.getByText('あ'));
    expect(onClickHandler).toHaveBeenCalled();
});

test('Clicking the left diagraph character should call the onClick event handler', () => {
    props.kana = new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true);
    render(<KanaDisplay {...props} />);
    fireEvent.click(screen.getByText('び'));
    expect(onClickHandler).toHaveBeenCalled();
});

test('Clicking the right diagraph character should call the onClick event handler', () => {
    props.kana = new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true);
    render(<KanaDisplay {...props} />);
    fireEvent.click(screen.getByText('ゃ'));
    expect(onClickHandler).toHaveBeenCalled();
});

test('Passing the index property when the display is not blurred should render the index', () => {
    props.index = 2;
    props.blur = false;
    render(<KanaDisplay {...props} />);
    expect(screen.getByText('2')).toBeInTheDocument();
});

test('Passing the index property when the display is blurred should not render the index', () => {
    props.index = 2;
    props.blur = true;
    render(<KanaDisplay {...props} />);
    expect(screen.queryByText('2')).not.toBeInTheDocument();
});

test('Notify incorrect should append the \'redKana\' class to the kana character', () => {
    const ref = React.createRef<KanaDisplay>();
    const { container, rerender } = render(<KanaDisplay {...props} ref={ref}/>);

    //Initially should have the regular kana class
    expect(container?.firstChild?.firstChild).toHaveClass('kana');

    //Calling notifyIncorrect should append the redKana class
    ref.current?.notifyIncorrect();
    expect(container?.firstChild?.firstChild).toHaveClass('redKana');

    //Upon next render, it should switch back to the kana class again
    rerender(<KanaDisplay {...props} ref={ref}/>);
    expect(container?.firstChild?.firstChild).toHaveClass('kana');
});

test('Passing a container style prop should cause that class to be applied to the container', () => {
    props.style = { container: 'containerClass' }
    const { container } = render(<KanaDisplay {...props} />);
    expect(container.firstChild).toHaveClass('containerClass');
});

test('Not passing a container style prop should default to the containers default class', () => {
    const { container } = render(<KanaDisplay {...props} />);
    expect(container.firstChild).toHaveClass('wrapper');
});

test('If not notifying incorrect, but is blurred, the character should have the \'blur\' class', () => {
    props.blur = true;
    const { container } = render(<KanaDisplay {...props} />);
    expect(container?.firstChild?.firstChild).toHaveClass('blur');
});

test('If the onClick event handler is bound, the character should have the \'clickable\' class', () => {
    const { container } = render(<KanaDisplay {...props} />);
    expect(container?.firstChild?.firstChild).toHaveClass('clickable');
});

test('If the onClick event handler is unbound, the character should not have the \'clickable\' class', () => {
    props.onClick = undefined;
    const { container } = render(<KanaDisplay {...props} />);
    expect(container?.firstChild?.firstChild).not.toHaveClass('clickable');
});