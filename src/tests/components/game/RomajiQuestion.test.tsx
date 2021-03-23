import { fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import RomajiQuestion, { RomajiQuestionProps } from "../../../components/game/RomajiQuestion";
import { Kana } from "../../../types/Kana";
import KanaType from "../../../types/KanaType";
import { KanaColumn } from "../../../types/KanaColumn";

const onSubmitHandler = jest.fn();

let props: RomajiQuestionProps;

beforeEach(() => {
    props = {
        kana: new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
        hintSettings: { quantity: 3, enabled: true },
        hidden: false,
        onSubmit: onSubmitHandler
    };
});

const setup = () => {
    const component = render(<RomajiQuestion {...props} />);
    return {
        input: component.getByPlaceholderText('Enter the Rōmaji'),
        submit: component.getByText('Check'),
        hintButton: component.getByTitle('Get a Hint'),
        ...component
    }
}

test('Answering correctly and clicking submit should call the onSubmit event handler with true', () => {
    const { input, submit } = setup();
    fireEvent.change(input, { target: { value: 'a'}});
    fireEvent.click(submit);
    expect(onSubmitHandler).toHaveBeenCalledWith(true);
});

test('Answering correctly with the wrong casing and clicking submit should call the onSubmit event handler with true', () => {
    const { input, submit } = setup();
    fireEvent.change(input, { target: { value: 'A'}});
    fireEvent.click(submit);
    expect(onSubmitHandler).toHaveBeenCalledWith(true);
});

test('Answering correctly with the second rōmaji value should call the onSubmit event handler with true', () => {
    props.kana = new Kana("ふ", ["hu", "fu"], KanaType.HIRAGANA, KanaColumn.H, false);
    const { input, submit } = setup();

    fireEvent.change(input, { target: { value: 'fu'}});
    fireEvent.click(submit);
    expect(onSubmitHandler).toHaveBeenCalledWith(true);

    fireEvent.change(input, { target: { value: 'hu'}});
    fireEvent.click(submit);
    expect(onSubmitHandler).toHaveBeenCalledWith(true);

    expect(onSubmitHandler).toHaveBeenCalledTimes(2);
});

test('Answer incorrectly and clicking submit should call the onSubmit event handler with false', () => {
    const { input, submit } = setup();
    fireEvent.change(input, { target: { value: 'ha'}});
    fireEvent.click(submit);
    expect(onSubmitHandler).toHaveBeenCalledWith(false);
});

test('Empty Rōmaji input value should disable the submit button', () => {
    const { input, submit } = setup();
    fireEvent.change(input, { target: { value: '' }});
    expect(submit).toBeDisabled();
});

test('Populating the Rōmaji input with a truthy value should enable the submit button', () => {
    const { input, submit } = setup();
    fireEvent.change(input, { target: { value: 'ka' }});
    expect(submit).not.toBeDisabled();
});

test('Passing the hints enabled property as false should disable the hint button', () => {
    props.hintSettings.enabled = false;
    const { hintButton } = setup();
    expect(hintButton).toBeDisabled();
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

test('Using the hint button twice in the same kana shouldn\'t use another hint', async () => {
    const { hintButton } = setup();

    fireEvent.focus(hintButton);
    expect(screen.getByTitle('Need a hint? (2/3 remaining)')).toBeInTheDocument();

    fireEvent.blur(hintButton);
    await waitForElementToBeRemoved(() => screen.getByTitle('Need a hint? (2/3 remaining)'));

    fireEvent.focus(hintButton);
    expect(screen.getByTitle('Need a hint? (2/3 remaining)')).toBeInTheDocument();
});
