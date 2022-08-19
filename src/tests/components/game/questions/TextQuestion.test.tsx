import { act, fireEvent, screen } from "@testing-library/react";
import TextQuestion, { TextQuestionProps } from "../../../../components/game/questions/TextQuestion";
import React from "react";
import LearnableField from "../../../../domain/learn/LearnableField";
import renderReduxConsumer from "../../../renderReduxConsumer";
import { MemoryGameQuestion } from "../../../../components/game/MemoryGame";
import renderTranslatedReduxConsumer from "../../../renderTranslatedReduxConsumer";

const isValidHandler = jest.fn();
const ref = React.createRef<MemoryGameQuestion>()

let props: TextQuestionProps;

beforeEach(() => {
    props = {
        question: "あ",
        answers: ["a"],
        answerField: LearnableField.ROMAJI,
        hidden: false,
        isValid: isValidHandler
    };
});

const setup = () => {
    const component = renderTranslatedReduxConsumer(<TextQuestion {...props} ref={ref} />);
    return {
        input: component.getByPlaceholderText('Rōmaji'),
        ...component
    }
}

test('Answering correctly and calling isCorrect should invoke with true', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'a'}});
    expect(ref.current?.isCorrect()).toBe(true);
});

test('Answering correctly with the wrong casing and calling isCorrect should invoke with true', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'A'}});
    expect(ref.current?.isCorrect()).toBe(true);
});

test('Answering correctly with the second rōmaji value and calling isCorrect should invoke with true', () => {
    props.question = "ふ";
    props.answers = ["hu", "fu"];
    const { input } = setup();

    fireEvent.change(input, { target: { value: 'fu'}});
    expect(ref.current?.isCorrect()).toBe(true);

    fireEvent.change(input, { target: { value: 'hu'}});
    expect(ref.current?.isCorrect()).toBe(true);
});

test('Answer incorrectly and clicking submit should call the onSubmit event handler with false', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: 'ha'}});

    let isCorrect;
    act(() => {isCorrect = ref.current?.isCorrect() });

    expect(isCorrect).toBe(false);
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
    renderReduxConsumer(<TextQuestion {...props} />);
    expect(screen.getByPlaceholderText('Paused')).toBeDisabled();
});

test('Passing the hidden property has true should set the Rōmaji input placeholder as \'Paused\'', () => {
    props.hidden = true;
    renderReduxConsumer(<TextQuestion {...props} />);
    expect(screen.getByPlaceholderText('Paused')).toBeInTheDocument();
});
