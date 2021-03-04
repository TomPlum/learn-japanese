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

//TODO: Replace w/Enzyme implementation test to check if the className changes.
test.skip('Notify incorrect', () => {
    const ref = React.createRef<KanaDisplay>();
    const { rerender } = render(<KanaDisplay {...props} ref={ref}/>);
    ref.current?.notifyIncorrect();
    rerender(<KanaDisplay {...props} ref={ref}/>);
    expect(screen.getByText('あ'));
});