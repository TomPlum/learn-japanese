import { Kanji } from "../../../../types/kanji/Kanji";
import { Reading } from "../../../../types/kanji/Reading";
import { ReadingType } from "../../../../types/kanji/ReadingType";
import { KyoikuGrade } from "../../../../types/kanji/KyoikuGrade";
import { Example } from "../../../../types/kanji/Example";
import { fireEvent, render, screen } from "@testing-library/react";
import KanjiExampleDisplay from "../../../../components/learn/kanji/KanjiExampleDisplay";
import { getByTextWithMarkup } from "../../../Queries";

const readings = [new Reading("jin", "じん", ReadingType.ON), new Reading("hito", "ひと", ReadingType.KUN)];
const source = "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji";
const meanings = ["person"];
const grade = KyoikuGrade.ONE;

const kanji = new Kanji("人", readings, meanings, grade, source, [new Example("外国人", ["がいこくじん"], ["foreigner"])]);

test('Should display the kanji', () => {
    render(<KanjiExampleDisplay kanji={kanji} />);
    expect(getByTextWithMarkup('外国人')).toBeInTheDocument();
});

test('Should render the kanji variation with the question kanji character highlighted', () => {
    render(<KanjiExampleDisplay kanji={kanji} />);
    expect(screen.getByText('人')).toHaveClass('highlight');
});

test('Should display the kana surrounded with parentheses', () => {
    render(<KanjiExampleDisplay kanji={kanji} />);
    expect(screen.getByText('( がいこくじん )')).toBeInTheDocument();
});

test('Should display the kana surrounded with parentheses and separated with \'or\' if there are multiple', () => {
    const kanji = new Kanji("人", readings, meanings, grade, source, [new Example("外国人", ["がいこくじん", "がいこくじん"], ["foreigner"])]);
    render(<KanjiExampleDisplay kanji={kanji} />);
    expect(screen.getByText('( がいこくじん or がいこくじん )')).toBeInTheDocument();
});

test('Should display the english meaning', () => {
    render(<KanjiExampleDisplay kanji={kanji} />);
    expect(screen.getByText('foreigner')).toBeInTheDocument();
});

test('Should display the english meanings separated by commas if there are multiple', () => {
    const kanji = new Kanji("人", readings, meanings, grade, source, [new Example("外国人", ["がいこくじん"], ["foreigner", "outside person"])]);
    render(<KanjiExampleDisplay kanji={kanji} />);
    expect(screen.getByText('foreigner, outside person')).toBeInTheDocument();
});

test('Should change to the next example when clicking the next button on via the spinner controller', () => {
    const kanji = new Kanji("人", readings, meanings, grade, source, [
        new Example("外国人", ["がいこくじん"], ["foreigner"]),
        new Example("三人", ["さんにん", "みたり"], ["three people"]),
    ]);
    const component = render(<KanjiExampleDisplay kanji={kanji} />);
    fireEvent.click(component.getByTitle('Next'));
    expect(getByTextWithMarkup('三人')).toBeInTheDocument();
    expect(component.getByText('( さんにん or みたり )')).toBeInTheDocument();
    expect(component.getByText('three people')).toBeInTheDocument();
});