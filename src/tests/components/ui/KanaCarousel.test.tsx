import { RandomNumberGenerator } from "../../../utility/RandomNumberGenerator";
import { render, screen } from "@testing-library/react";
import KanaCarousel from "../../../components/ui/KanaCarousel";
import { Kana } from "../../../types/Kana";
import KanaType from "../../../types/KanaType";
import { KanaColumn } from "../../../types/KanaColumn";

const a = new Kana("あ", ["a"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
const i = new Kana("い", ["i"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);
const e = new Kana("え", ["e"], KanaType.HIRAGANA, KanaColumn.VOWEL, false);

beforeEach(() => {
    jest.useFakeTimers();

    RandomNumberGenerator.getRandomObject = jest.fn().mockImplementation((array: any[]) => {
        const element = array.splice(0, 1)[0];
        return [element, array];
    });
});

afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
});

test('Should display a random kana on load', () => {
    render(<KanaCarousel kana={[a, i, e]}/>);
    expect(screen.getByText('あ')).toBeInTheDocument();
    expect(screen.getByText('a')).toBeInTheDocument();
});

test('Should display another random kana after 4s', () => {
    render(<KanaCarousel kana={[a, i, e]}/>);
    expect(screen.getByText('あ')).toBeInTheDocument();
    jest.advanceTimersByTime(4000);
    expect(screen.getByText('い')).toBeInTheDocument();
});

test('Should reset the kana after exhausting them all', () => {
    const { rerender } = render(<KanaCarousel kana={[a, i, e]}/>);

    //Exhaust
    expect(screen.getByText('あ')).toBeInTheDocument();
    jest.advanceTimersByTime(4000);
    expect(screen.getByText('い')).toBeInTheDocument();
    jest.advanceTimersByTime(4000);
    expect(screen.getByText('え')).toBeInTheDocument();

    rerender(<KanaCarousel kana={[a, i, e]}/>);

    jest.advanceTimersByTime(4000);
    expect(screen.getByText('あ')).toBeInTheDocument();
});