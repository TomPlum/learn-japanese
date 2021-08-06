import { fireEvent, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import HintButton, { HintButtonProps } from "../../../components/game/HintButton";
import { Kana } from "../../../types/kana/Kana";
import KanaType from "../../../types/kana/KanaType";
import { KanaColumn } from "../../../types/kana/KanaColumn";

const onUseHandler = jest.fn();

let props: HintButtonProps;

beforeEach(() => {
    props = {
        data: new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
        quantity: 3,
        remaining: 3,
        infinite: false,
        disabled: false,
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

test('Renders overlay title', async () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(await screen.findByText('Need a hint? (3/3 remaining)')).toBeInTheDocument();
});

test('Renders correct overlay title for infinite hints', async () => {
    props.infinite = true;
    const { button } = setup();
    fireEvent.click(button);
    expect(await screen.findByText('Need a hint?')).toBeInTheDocument();
});

test('Renders correct overlay title for no hints remaining', async () => {
    props.remaining = 0;
    const { button } = setup();
    fireEvent.click(button);
    expect(await screen.findByText('Sorry! You\'re out of hints.')).toBeInTheDocument();
});

test('Renders the correct overlay title for the last hint', async () => {
    props.remaining = 1;
    const { button } = setup();

    //Reveal Hint
    fireEvent.click(button);
    fireEvent.click(await screen.findByText('Click to Reveal'));

    expect(screen.getByText('This is your last hint!')).toBeInTheDocument();
});

test('Renders correct overlay body text for kana hint', async () => {
    const { button } = setup();

    fireEvent.click(button);
    fireEvent.click(screen.getByText('Click to Reveal'));

    const text = await screen.findByText('This kana is from the \'vowel\' column in the Hiragana syllabary.');
    expect(text).toBeInTheDocument()
});

test('Renders correct overlay body text for when the user has exhausted all their hints', async () => {
    props.remaining = 0;
    const { button } = setup();
    fireEvent.click(button);
    expect(await screen.findByText('You\'ve already used your 3 hints.')).toBeInTheDocument()
});

test('Should disable the hint button when the disabled property is passed as true', () => {
    props.disabled = true;
    render(<HintButton {...props} />);
    expect(screen.getByTitle('Hints are disabled.')).toBeDisabled();
});

test('Revealing the hint button should call the onUse event handler', async () => {
    const { button } = setup();

    //Open the hint popover
    fireEvent.click(button);
    await screen.findByText('Need a hint? (3/3 remaining)');

    //Reveal the hint
    fireEvent.click(screen.getByText('Click to Reveal'));
    expect(onUseHandler).toHaveBeenCalled();
});

test('Blurring the button should stop rendering the overlay', async () => {
    const { button } = setup();

    fireEvent.click(button);
    const popover = await screen.findByText('Need a hint? (3/3 remaining)');
    expect(popover).toBeInTheDocument();

    fireEvent.click(button);
    await waitForElementToBeRemoved(popover);
});

test('Should apply the \'disabled\' className to the button when the user has exhausted all their hints', () => {
    props.remaining = 0;
    const { container } = setup();
    expect(container?.firstChild).toHaveClass('disabled');
});

test('Should apply the default \'button\' className to the button when the user has hints remaining', () => {
    const { container } = setup();
    expect(container?.firstChild).toHaveClass('button');
});
