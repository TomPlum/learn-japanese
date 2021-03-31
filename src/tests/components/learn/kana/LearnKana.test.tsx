import { RandomNumberGenerator } from "../../../../utility/RandomNumberGenerator";
import { Kana } from "../../../../types/Kana";
import KanaType from "../../../../types/KanaType";
import { KanaColumn } from "../../../../types/KanaColumn";
import { fireEvent, render, screen } from "@testing-library/react";
import LearnKana, { LearnKanaProps } from "../../../../components/learn/kana/LearnKana";

let props: LearnKanaProps;

beforeEach(() => {
    props = {
        kana: [
            new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
            new Kana("い", ["i"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
            new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false),
            new Kana("お", ["o"], KanaType.HIRAGANA, KanaColumn.VOWEL, false)
        ]
    };

    RandomNumberGenerator.getRandomObject = jest.fn().mockImplementation((array: any[]) => {
        const objects = [...array];
        const firstKana = objects[0];
        objects.splice(0, 1);
        return [firstKana, objects];
    });
});

afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
});

const setup = () => {
    const component = render(<LearnKana {...props} />);
    return {
        remembered: component.getByTitle('I remembered it'),
        forgot: component.getByTitle('I couldn\'t remember it'),
        next: component.getByText('Next'),
        ...component
    };
}

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

    expect(screen.getByTitle('1/4')).toBeInTheDocument();

    fireEvent.click(screen.getByText('あ'));
    fireEvent.click(remembered)
    fireEvent.click(next)

    expect(screen.getByTitle('2/4')).toBeInTheDocument();
});

