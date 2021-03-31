import { RandomNumberGenerator } from "../../../../utility/RandomNumberGenerator";
import { Kana } from "../../../../types/Kana";
import KanaType from "../../../../types/KanaType";
import { KanaColumn } from "../../../../types/KanaColumn";
import { fireEvent, render, screen } from "@testing-library/react";
import LearnKana from "../../../../components/learn/kana/LearnKana";

const a = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
const i = new Kana("い", ["i"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
const e = new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
const o = new Kana("お", ["o"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);

const getRandomObject = jest.fn();

const setup = () => {
    const component = render(<LearnKana kana={[a, i, e, o]} />);
    return {
        remembered: component.getByTitle('I remembered it'),
        forgot: component.getByTitle('I couldn\'t remember it'),
        next: component.getByText('Next'),
        ...component
    };
}

beforeEach(() => {
    RandomNumberGenerator.getRandomObject = getRandomObject;

    getRandomObject.mockImplementation((array: any[]) => {
        const element = array[0];
        return [element, array.splice(1, array.length - 1)];
    });
});

test('Should show a random flash card to start', () => {
    setup();
    expect(screen.getByText('あ')).toBeInTheDocument();
});

test('Forgotten, Remembered & Next buttons should be disabled before the user has flipped once', () => {
    const { next, remembered, forgot} = setup();
    expect(next).toBeDisabled();
    expect(remembered).toBeDisabled();
    expect(forgot).toBeDisabled();
});

test('Flipping the card should enable the Forgotten & Remembered buttons', () => {
    const { next, remembered, forgot} = setup();
    fireEvent.click(screen.getByText('あ'));
    expect(remembered).not.toBeDisabled();
    expect(forgot).not.toBeDisabled();
    expect(next).toBeDisabled();
});

test('Flipping the card and selecting Remembered should enable the Next button', () => {
    const { next, remembered } = setup();
    fireEvent.click(screen.getByText('あ'));
    fireEvent.click(remembered)
    expect(next).not.toBeDisabled();
});

test('Flipping the card and selecting Forgotten should enable the Next button', () => {
    const { next, forgot } = setup();
    fireEvent.click(screen.getByText('あ'));
    fireEvent.click(forgot)
    expect(next).not.toBeDisabled();
});

test('Clicking Next should render the next Kana', () => {
    const { next, remembered } = setup();
    fireEvent.click(screen.getByText('あ'));
    fireEvent.click(remembered)
    fireEvent.click(next)
    expect(screen.getByText('い')).toBeInTheDocument();
});

test('Clicking Next should advance the progress bar', () => {
    const { next, remembered } = setup();

    expect(screen.getByTitle('1/5')).toBeInTheDocument();

    fireEvent.click(screen.getByText('あ'));
    fireEvent.click(remembered)
    fireEvent.click(next)

    expect(screen.getByTitle('2/5')).toBeInTheDocument();
});

