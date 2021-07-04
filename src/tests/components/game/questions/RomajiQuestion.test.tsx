import { fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import RomajiQuestion, { RomajiQuestionProps } from "../../../../components/game/questions/RomajiQuestion";
import { Kana } from "../../../../types/kana/Kana";
import KanaType from "../../../../types/kana/KanaType";
import { KanaColumn } from "../../../../types/kana/KanaColumn";
import React from "react";

const isValidHandler = jest.fn();
const ref = React.createRef<RomajiQuestion>()

let props: RomajiQuestionProps;

beforeEach(() => {
    props = {
        kana: new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
        hidden: false,
        isValid: isValidHandler
    };
});

const setup = () => {
    const component = render(<RomajiQuestion {...props} ref={ref} />);
    return {
        input: component.getByPlaceholderText('Enter the Rōmaji'),
        ...component
    }
}

test('Answering correctly and calling isCorrect should invoke with true', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'a'}});
    const isCorrect = ref.current?.isCorrect();
    expect(isCorrect).toBe(true);
});

test('Answering correctly with the wrong casing and calling isCorrect should invoke with true', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'A'}});
    const isCorrect = ref.current?.isCorrect();
    expect(isCorrect).toBe(true);
});

test('Answering correctly with the second rōmaji value and calling isCorrect should invoke with true', () => {
    props.kana = new Kana("ふ", ["hu", "fu"], KanaType.HIRAGANA, KanaColumn.H, false);
    const { input } = setup();

    fireEvent.change(input, { target: { value: 'fu'}});
    expect(ref.current?.isCorrect()).toBe(true);

    fireEvent.change(input, { target: { value: 'hu'}});
    expect(ref.current?.isCorrect()).toBe(true);
});

test('Answer incorrectly and clicking submit should call the onSubmit event handler with false', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'ha'}});
    expect(ref.current?.isCorrect()).toBe(false);
});

test('Empty Rōmaji input value should call the isValid event handler with false', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'ka' }}); //It starts empty so must populate first
    fireEvent.change(input, { target: { value: '' }});
    expect(isValidHandler).toHaveBeenCalledWith(false);
});

test('Populating the Rōmaji input with a truthy value should call the isValid event handler with true', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'ka' }});
    expect(isValidHandler).toHaveBeenCalledWith(true);
});

test('Passing the hidden property has true should disable the Rōmaji input field', () => {
    props.hidden = true;
    render(<RomajiQuestion {...props} />);
    expect(screen.getByPlaceholderText('Paused')).toBeDisabled();
});

test('Passing the hidden property has true should set the Rōmaji input placeholder as \'Paused\'', () => {
    props.hidden = true;
    render(<RomajiQuestion {...props} />);
    expect(screen.getByPlaceholderText('Paused')).toBeInTheDocument();
});