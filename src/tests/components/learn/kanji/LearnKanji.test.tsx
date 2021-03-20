import { fireEvent, render, screen } from "@testing-library/react";
import LearnKanji from "../../../../components/learn/kanji/LearnKanji";
import { Kanji } from "../../../../types/kanji/Kanji";
import { Reading } from "../../../../types/kanji/Reading";
import { ReadingType } from "../../../../types/kanji/ReadingType";
import { KyoikuGrade } from "../../../../types/kanji/KyoikuGrade";
import { Example } from "../../../../types/kanji/Example";
import { RandomNumberGenerator } from "../../../../utility/RandomNumberGenerator";

let kanji: Kanji[];

beforeEach(() => {
    RandomNumberGenerator.getRandomObject = jest.fn().mockImplementation((array: any[]) => {
        return [array[0], array.splice(1, array.length -  1)];
    });

    kanji = [
        new Kanji(
            '人',
            [new Reading("jin", "じん", ReadingType.ON), new Reading("hito", "ひと", ReadingType.KUN)],
            ["person"],
            KyoikuGrade.ONE,
            "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
            [new Example("外国人", ["がいこくじん"], ["foreigner"])]
        ),
        new Kanji(
            '一',
            [new Reading("ichi", "いち", ReadingType.ON), new Reading("hito", "ひと", ReadingType.KUN)],
            ["one"],
            KyoikuGrade.ONE,
            "https://en.wiktionary.org/wiki/%E4%B8%80#Kanji",
            [new Example("一つ", ["ひとつ"], ["one"])]
        )
    ];
});

const setup = () => {
    const component = render(<LearnKanji kanji={kanji}/>);
    return {
        next: component.getByText('Next'),
        ...component
    }
}

test('Next button should be disabled on load', () => {
    const { next } = setup();
    expect(next).toBeDisabled();
});

test('Flipping the card should enable the Next button', () => {
    const { next } = setup();
    fireEvent.click(screen.getByTestId('front'));
    expect(next).not.toBeDisabled();
});

test('Exhausting all Kanji should change the Next Button to restart', () => {
    const { next } = setup();
    fireEvent.click(screen.getByTestId('front'));
    fireEvent.click(next);
    fireEvent.click(screen.getByTestId('front'));
    expect(screen.getByText('Restart')).toBeInTheDocument();
});

test('Clicking restart should start the deck again', () => {
    const { next } = setup();

    //Flip and advance past first card.
    fireEvent.click(screen.getByTestId('front'));
    fireEvent.click(next);

    //Flip final card and click restart
    fireEvent.click(screen.getByTestId('front'));
    fireEvent.click(screen.getByText('Restart'));

    expect(next).toBeInTheDocument();
    expect(screen.getAllByText('人')).toHaveLength(2);
});

//TODO: How can we test the ReactCardFlip component?
test.skip('Clicking a card should flip it over', () => {
    const component = setup();
    fireEvent.click(component.getByTestId('front'));
    expect(component.getByTestId('back')).toBeInTheDocument();
});

test.skip('Clicking the reset button on the back of the card should flip the card back', () => {
    const component = setup();
    fireEvent.click(component.getByTestId('front'));
    fireEvent.click(component.getByTitle('Reset'));
    expect(component.getByTestId('front')).toBeInTheDocument();
});

test.skip('Clicking the next button after flipping a card should display the next one', () => {
    const { next } = setup();
    expect(screen.getByText('人')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('front'));
    fireEvent.click(next);

    expect(screen.getByText('一')).toBeInTheDocument();
});