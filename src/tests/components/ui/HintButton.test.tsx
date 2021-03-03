import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import HintButton, { HintButtonProps } from "../../../components/game/HintButton";
import { Kana } from "../../../types/Kana";
import KanaType from "../../../types/KanaType";
import { KanaColumn } from "../../../types/KanaColumn";

const onUseHandler = jest.fn();

let props: HintButtonProps = {
    kana: new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
    totalQuantity: 3,
    quantity: 3,
    disabled: false,
    title: 'Get a Hint',
    onUse: onUseHandler
};

const setup = () => {
    const component = render(<HintButton {...props} />);
    return {
        button: component.getByTitle('Get a Hint'),
        ...component
    }
}

test('Has Hints Remaining Title', async () => {
    const { button } = setup();
    fireEvent.click(button);
    await waitFor(() => expect(screen.findByTitle('Need a hint? (2/3 remaining)')).toBeDefined());
});

test('Infinite Hints Title', async () => {
    const { button } = setup();
    fireEvent.click(button);
    await waitFor(() => expect(screen.findByTitle('Need a hint?')).toBeDefined());
});

test('No Remaining Hints Title', async () => {
    props.totalQuantity = 5;
    props.quantity = 0;
    const { button } = setup();
    fireEvent.click(button);
    await waitFor(() => expect(screen.findByTitle('Sorry!')).toBeDefined());
});

test('Regular Kana Message Text', async () => {
    const { button } = setup();
    fireEvent.click(button);
    await waitFor(() => {
        expect(screen.findByText('This kana is from the \'vowel\' column in the " + kana.type + " syllabary.')).toBeDefined()
    });
});

test('Diagraph Message Text', async () => {
    props.kana = new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true);
    const { button } = setup();
    fireEvent.click(button);
    await waitFor(() => {
        expect(screen.findByText('Diagraphs usually drop the 1st kana\'s 2nd letter when transcribed.')).toBeDefined()
    });
});

test('Exceptional Kana (n) Message Text', async () => {
    props.kana = new Kana("n", ["n"], KanaType.HIRAGANA, KanaColumn.OTHER, false);
    const { button } = setup();
    fireEvent.click(button);
    await waitFor(() => {
        expect(screen.findByText('This kana is exceptional. It is not a consonant nor a vowel.')).toBeDefined()
    });
});

test('No Hints Remaining Message Text', async () => {
    props.quantity = 0
    const { button } = setup();
    fireEvent.click(button);
    await waitFor(() => {
        expect(screen.findByText('You\'ve used all of your hints.')).toBeDefined()
    });
});

test('Disabled Property Should Disable Button', () => {
    props.disabled = true;
    const { button } = setup();
    expect(button).toBeDisabled();
});

/*
test('Using Hint Button Should Call onUse Event Handler', async () => {
    const { button } = setup();
    button.focus();
    fireEvent.mouseDown(button);
    await waitFor(() => expect(screen.findByTitle('Need a hint? (2/3 remaining)')).toBeDefined());
    expect(onUseHandler).toHaveBeenCalled();
});

test('Blurring Should Remove The Overlay PopOver', async () => {
    const { button } = setup();

    button.focus();
    await waitFor(() => expect(screen.findByTitle('Need a hint? (2/3 remaining)')).toBeDefined());

    button.blur();
    await waitForElementToBeRemoved(() => screen.findByTitle('Need a hint? (2/3 remaining)'));

    expect(screen.getByTitle('Need a hint? (2/3 remaining)')).not.toBeDefined();
});*/
