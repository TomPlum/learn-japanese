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

test('Renders overlay title', async () => {
    const { button } = setup();
    fireEvent.click(button);
    expect(await screen.findByTitle('Need a hint? (2/3 remaining)')).toBeInTheDocument();
});

test('Renders correct overlay title for infinite hints', async () => {
    props.totalQuantity = undefined;
    const { button } = setup();
    fireEvent.click(button);
    expect(await screen.findByTitle('Need a hint?')).toBeInTheDocument();
});

test('Renders correct overlay title for no hints remaining', async () => {
    props.totalQuantity = 5;
    props.remaining = 0;
    const { button } = setup();
    fireEvent.click(button);
    expect(await screen.findByTitle('Sorry!')).toBeInTheDocument();
});

test('Renders correct overlay body text for kana hint', async () => {
    const { button } = setup();
    fireEvent.click(button);
    const text = await screen.findByText('This kana is from the \'vowel\' column in the Hiragana syllabary.');
    expect(text).toBeInTheDocument()
});

test('Renders correct overlay body text for when the user has exhausted all their hints', async () => {
    props.remaining = 0
    const { button } = setup();
    fireEvent.click(button);
    expect(await screen.findByText('You\'ve used all of your hints.')).toBeInTheDocument()
});

test('Should disable the hint button when the disabled property is passed as true', () => {
    props.disabled = true;
    const { button } = setup();
    expect(button).toBeDisabled();
});

test('Clicking the hint button should call the onUse event handler', async () => {
    const { button } = setup();
    fireEvent.click(button);
    await screen.findByTitle('Need a hint? (2/3 remaining)');
    expect(onUseHandler).toHaveBeenCalled();
});

test('Blurring the button should stop rendering the overlay', async () => {
    const { button } = setup();

    fireEvent.click(button);
    const popover = await screen.findByTitle('Need a hint? (2/3 remaining)');
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