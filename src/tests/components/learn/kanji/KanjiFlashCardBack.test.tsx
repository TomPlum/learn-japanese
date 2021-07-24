import { fireEvent, render, screen } from "@testing-library/react";
import { Kanji } from "../../../../types/kanji/Kanji";
import { KanjiReading } from "../../../../types/kanji/KanjiReading";
import { ReadingType } from "../../../../types/kanji/ReadingType";
import { KyoikuGrade } from "../../../../types/kanji/KyoikuGrade";
import { Example } from "../../../../types/kanji/Example";
import KanjiFlashCardBack from "../../../../components/learn/kanji/KanjiFlashCardBack";
import { Environment } from "../../../../utility/Environment";
import { getByTextWithMarkup } from "../../../Queries";

const onClickHandler = jest.fn();
const mockEnvironment = jest.fn();

const kanji = new Kanji(
    "人",
    [new KanjiReading("jin", "じん", ReadingType.ON), new KanjiReading("hito", "ひと", ReadingType.KUN)],
    ["person", "fake-example"],
    KyoikuGrade.ONE,
    "https://en.wiktionary.org/wiki/%E4%BA%BA#Kanji",
    [new Example("外国人", ["がいこくじん"], ["foreigner"])],
    []
);

beforeEach(() => {
    Environment.variable = mockEnvironment;
});

test('Should call the onClick event handler when clicking the reset button', () => {
    const component = render(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />);
    fireEvent.click(component.getByTitle('Reset'));
    expect(onClickHandler).toHaveBeenCalled();
});

test('Should render the kanji', () => {
    const component = render(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />);
    expect(component.getAllByText('人').length).toBeGreaterThan(0);
});

test('Should render the on reading', () => {
    const component = render(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />);
    expect(component.getByText('じん')).toBeInTheDocument();
});

test('Should render the kun reading', () => {
    const component = render(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />);
    expect(component.getByText('ひと')).toBeInTheDocument();
});

test('Should render the meanings comma delimited', () => {
    const component = render(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />);
    expect(component.getByText(': person, fake-example')).toBeInTheDocument();
});

test('Should render the grade', () => {
    const component = render(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />);
    expect(component.getByText('Grade 1 Kyōiku')).toBeInTheDocument();
});

test('Should render the kanji as a link to the source', () => {
    const component = render(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />);
    expect(component.getByTitle('Click for Wiki source')).toHaveAttribute('href', kanji.source);
});

test('Should render the examples display', () => {
    const component = render(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />);
    expect(component.getByText('外国人')).toBeInTheDocument();
    expect(getByTextWithMarkup('( がいこくじん )')).toBeInTheDocument();
    expect(component.getByText('foreigner')).toBeInTheDocument();
});

test('Should display the meaning reading description when hovering over the \'Meaning\' text', async () => {
    mockEnvironment.mockReturnValue('Example meaning desc');
    const component = render(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />);

    fireEvent.mouseOver(component.getByText('Meaning'));

    expect(await screen.findByTitle('English Meaning')).toBeInTheDocument();
    expect(await screen.findByText('Example meaning desc')).toBeInTheDocument();
});

test('Should assign a dynamic class to the container based on the grade', () => {
    const { container } = render(<KanjiFlashCardBack data={kanji} onClick={onClickHandler} showRomaji={false} />);
    expect(container.firstChild).toHaveClass('wrapper-grade-1');
});
