import { fireEvent, render, screen } from "@testing-library/react";
import FlashCard from "../../components/learn/FlashCard";
import { Kanji } from "../../types/kanji/Kanji";
import { Reading } from "../../types/kanji/Reading";
import { ReadingType } from "../../types/kanji/ReadingType";
import { Example } from "../../types/kanji/Example";

const onFlipHandler = jest.fn();
const kanji = new Kanji(
    '人',
    [new Reading("jin", "じん", ReadingType.ON), new Reading("hito", "ひと", ReadingType.KUN)],
    ["person"],
    1,
    "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
    [new Example("外国人", ["がいこくじん"], ["foreigner"])]
);

const setup = () => {
    const component = render(<FlashCard kanji={kanji} onFlip={onFlipHandler} />);
    return {
        front: component.getByTestId('front'),
        back: component.getByTestId('back'),
        ...component
    }
}

test.skip('Should start face up, showing only the Kanji character', () => {
    const { front } = setup();
    expect(front).toHaveProperty('style._values.position', 'relative');
});

test('Clicking a cards face should call the onFlip event handler', () => {
    const { front } = setup();
    fireEvent.click(front);
    expect(onFlipHandler).toHaveBeenCalledWith(1);
});

test('Clicking a cards face and then the rest button should call the onFlip event handler with 2 flips', () => {
    const { front } = setup();
    fireEvent.click(front);
    fireEvent.click(screen.getByTitle('Reset'));
    expect(onFlipHandler).toHaveBeenCalledWith(2);
});