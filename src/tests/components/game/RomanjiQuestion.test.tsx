import { fireEvent, render, screen } from "@testing-library/react";
import RomanjiQuestion, { RomanjiQuestionProps } from "../../../components/game/RomanjiQuestion";
import { Kana } from "../../../types/Kana";
import KanaType from "../../../types/KanaType";
import { KanaColumn } from "../../../types/KanaColumn";

const onSubmitHandler = jest.fn();

let props: RomanjiQuestionProps = {
    kana: new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
    hintSettings: { quantity: 3, enabled: true },
    hidden: false,
    onSubmit: onSubmitHandler
};

const setup = () => {
    const component = render(<RomanjiQuestion {...props} />);
    return {
        input: component.getByPlaceholderText('Enter the romanji'),
        submit: component.getByText('Check'),
        hintButton: component.getByTitle('Get a Hint'),
        ...component
    }
}

test('Answer Correctly', () => {
    const { input, submit } = setup();

    fireEvent.change(input, { target: { value: 'a'}});
    fireEvent.click(submit);

    expect(onSubmitHandler).toHaveBeenCalledWith(true);
});

test('Answer Incorrectly', () => {
    const { input, submit } = setup();

    fireEvent.change(input, { target: { value: 'ha'}});
    fireEvent.click(submit);

    expect(onSubmitHandler).toHaveBeenCalledWith(false);
});

test('Empty Romanji Input Should Disable Submit Button', () => {
    const { input, submit } = setup();
    fireEvent.change(input, { target: { value: '' }});
    expect(submit).toBeDisabled();
});

test('Populated Romanji Input Should Enable Submit Button', () => {
    const { input, submit } = setup();
    fireEvent.change(input, { target: { value: 'ka' }});
    expect(submit).not.toBeDisabled();
});

test('Hints Disabled Should Disable Hint Button', () => {
    props.hintSettings.enabled = false;
    const { hintButton } = setup();
    expect(hintButton).toBeDisabled();
});

test('Hidden Should Disable Hint Button', () => {
    props.hidden = true;
    render(<RomanjiQuestion {...props} />);
    expect(screen.getByPlaceholderText('Paused')).toBeDisabled();
});

test('Hidden Should Set Romanji Input Placeholder -> "Paused"', () => {
    props.hidden = true;
    render(<RomanjiQuestion {...props} />);
    expect(screen.getByPlaceholderText('Paused')).toBeDefined();
});


/*
test('Use Hint', async () => {
    const { hintButton } = setup();
    fireEvent.click(hintButton);
    expect(await screen.findByTitle('Need a hint? (2/3 remaining)')).toBeInTheDocument();
});

test('Use Hint Twice Same Kana', async () => {
    const { submit, hintButton } = setup();

    await fireEvent.click(hintButton);
    expect(await screen.findByTitle('Need a hint? (2/3 remaining)')).toBeInTheDocument();

    fireEvent.click(submit); //Click away from pop-over to dismiss.

    fireEvent.click(hintButton);
    expect(screen.getByTitle('Need a hint? (2/3 remaining)')).toBeInTheDocument();
});*/
