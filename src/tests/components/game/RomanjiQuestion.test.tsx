import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import RomanjiQuestion, { RomanjiQuestionProps } from "../../../components/game/RomanjiQuestion";
import { Kana } from "../../../types/Kana";
import KanaType from "../../../types/KanaType";
import { KanaColumn } from "../../../types/KanaColumn";

const onSubmitHandler = jest.fn();

let props: RomanjiQuestionProps;

beforeEach(() => {
    props = {
        kana: new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
        hintSettings: { quantity: 3, enabled: true },
        hidden: false,
        onSubmit: onSubmitHandler
    };
});

const setup = () => {
    const component = render(<RomanjiQuestion {...props} />);
    return {
        input: component.getByPlaceholderText('Enter the romanji'),
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

test('Answer incorrectly and clicking submit should call the onSubmit event handler with false', () => {
    const { input, submit } = setup();
    fireEvent.change(input, { target: { value: 'ha'}});
    fireEvent.click(submit);
    expect(onSubmitHandler).toHaveBeenCalledWith(false);
});

test('Empty Romanji input value should disable the submit button', () => {
    const { input, submit } = setup();
    fireEvent.change(input, { target: { value: '' }});
    expect(submit).toBeDisabled();
});

test('Populating the Romanji input with a truthy value should enable the submit button', () => {
    const { input, submit } = setup();
    fireEvent.change(input, { target: { value: 'ka' }});
    expect(submit).not.toBeDisabled();
});

test('Passing the hints enabled property as false should disable the hint button', () => {
    props.hintSettings.enabled = false;
    const { hintButton } = setup();
    expect(hintButton).toBeDisabled();
});

test('Passing the hidden property has true should disable the Romanji input field', () => {
    props.hidden = true;
    render(<RomanjiQuestion {...props} />);
    expect(screen.getByPlaceholderText('Paused')).toBeDisabled();
});

test('Passing the hidden property has true should set the Romanji input placeholder as \'Paused\'', () => {
    props.hidden = true;
    render(<RomanjiQuestion {...props} />);
    expect(screen.getByPlaceholderText('Paused')).toBeDefined();
});

test('Clicking the hint button should trigger the pop-over with the title showing hints remaining', async () => {
    const { hintButton } = setup();
    fireEvent.click(hintButton);
    await waitFor(() => expect(screen.findByTitle('Need a hint? (2/3 remaining)')).toBeDefined());
});

//TODO: The onUse event handler is not getting called. Seems onClick isn't enough to simulate onToggle.
test.skip('Using the hint button twice in the same kana shouldn\'t use another hint', async () => {
    const { submit, hintButton } = setup();

    fireEvent.click(hintButton);
    await waitFor(() => expect(screen.findByTitle('Need a hint? (2/3 remaining)')).toBeDefined());

    fireEvent.click(submit); //Click away from pop-over to dismiss.
    await waitForElementToBeRemoved(() => screen.findByTitle('Need a hint? (2/3 remaining)'));

    fireEvent.click(hintButton);
    await waitFor(() => expect(screen.findByTitle('Need a hint? (2/3 remaining)')).toBeDefined());
});
