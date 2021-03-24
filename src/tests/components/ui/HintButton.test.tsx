import { fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import HintButton, { HintButtonProps } from "../../../components/game/HintButton";
import { Kana } from "../../../types/Kana";
import KanaType from "../../../types/KanaType";
import { KanaColumn } from "../../../types/KanaColumn";

const onUseHandler = jest.fn();

let props: HintButtonProps;

beforeEach(() => {
    props = {
        kana: new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
        totalQuantity: 3,
        remaining: 3,
        disabled: false,
        title: 'Get a Hint',
        onUse: onUseHandler
    };
});

const setup = () => {
    const component = render(<HintButton {...props} />);
    return {
        button: component.getByTitle('Get a Hint'),
        ...component
    }
}

test('Has Hints Remaining Title', () => {
    const { button } = setup();
    fireEvent.focus(button);
    expect(screen.getByTitle('Need a hint? (2/3 remaining)')).toBeInTheDocument();
});

test('Infinite Hints Title', () => {
    props.remaining = 999;
    const { button } = setup();
    fireEvent.focus(button);
    expect(screen.getByTitle('Need a hint?')).toBeInTheDocument();
});

test('No Remaining Hints Title', () => {
    props.totalQuantity = 5;
    props.remaining = 0;
    const { button } = setup();
    fireEvent.focus(button);
    expect(screen.getByTitle('Sorry!')).toBeInTheDocument();
});

test('Regular Kana Message Text', () => {
    const { button } = setup();
    fireEvent.focus(button);
    const text = screen.getByText('This kana is from the \'vowel\' column in the Hiragana syllabary.');
    expect(text).toBeInTheDocument()
});

test('Diacritical Kana Message Text', () => {
    props.kana = new Kana("ぞ", ["zo"], KanaType.HIRAGANA, KanaColumn.S, true);
    const { button } = setup();
    fireEvent.focus(button);
    const text = screen.getByText('This kana is from the \'s\' column in the Hiragana syllabary. Also, notice the diacritical mark.');
    expect(text).toBeInTheDocument()
});

test('Diagraph Message Text', () => {
    props.kana = new Kana("しゅ", ["shu"], KanaType.HIRAGANA, KanaColumn.S, false);
    const { button } = setup();
    fireEvent.focus(button);
    const text = screen.getByText('Diagraphs usually drop the 1st kana\'s 2nd letter when transcribed.');
    expect(text).toBeInTheDocument()
});

test('Diacritical Diagraph Message Text', () => {
    props.kana = new Kana("びゃ", ["bya"], KanaType.HIRAGANA, KanaColumn.H, true);
    const { button } = setup();
    fireEvent.focus(button);
    const text = screen.getByText('Diagraphs usually drop the 1st kana\'s 2nd letter when transcribed. Also, notice the diacritical mark.');
    expect(text).toBeInTheDocument()
});

test('Exceptional Kana (n) Message Text', () => {
    props.kana = new Kana("n", ["n"], KanaType.HIRAGANA, KanaColumn.OTHER, false);
    const { button } = setup();
    fireEvent.focus(button);
    const text = screen.getByText('This kana is exceptional. It is not a consonant nor a vowel.');
    expect(text).toBeInTheDocument()
});

test('No Hints Remaining Message Text', () => {
    props.remaining = 0
    const { button } = setup();
    fireEvent.focus(button);
    expect(screen.getByText('You\'ve used all of your hints.')).toBeInTheDocument()
});

test('Disabled Property Should Disable Button', () => {
    props.disabled = true;
    const { button } = setup();
    expect(button).toBeDisabled();
});

test('Using Hint Button Should Call onUse Event Handler', () => {
    const { button } = setup();
    fireEvent.focus(button);
    expect(onUseHandler).toHaveBeenCalled();
});

test('Blurring Should Remove The Overlay PopOver', async () => {
    const { button } = setup();

    fireEvent.focus(button);
    const popover = screen.getByTitle('Need a hint? (2/3 remaining)');
    expect(popover).toBeInTheDocument();

    fireEvent.blur(button);
    await waitForElementToBeRemoved(popover);
});

test('When tip quantity is 0, it should apply the \'disabled\' class to the button', () => {
    props.remaining = 0;
    const { container } = setup();
    expect(container?.firstChild).toHaveClass('disabled');
});

test('When tip quantity is greater than 0, it should apply the default \'tip\' class to the button', () => {
    const { container } = setup();
    expect(container?.firstChild).toHaveClass('tip');
});