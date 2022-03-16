import { Kanji } from "../../../domain/kanji/Kanji";
import { KanjiReading } from "../../../domain/kanji/KanjiReading";
import { ReadingType } from "../../../domain/kanji/ReadingType";
import { KyoikuGrade } from "../../../domain/kanji/KyoikuGrade";
import JLTPLevel from "../../../domain/learn/JLTPLevel";
import { Example } from "../../../domain/kanji/Example";
import KanjiShowcaseCard from "../../../components/cards/KanjiShowcaseCard";
import renderReduxConsumer from "../../renderReduxConsumer";
import { store } from "../../../store";
import { setFont } from "../../../slices/FontSlice";
import { fireEvent, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const mockKanjiService = jest.fn();

jest.mock("../../../service/KanjiService", () => {
    return function() { return { randomKanji: mockKanjiService } };
});

const kanji = new Kanji(
    "魚",
    [new KanjiReading("sakana", "さかな", ReadingType.KUN), new KanjiReading("go", "ご", ReadingType.ON)],
    ["fish"],
    KyoikuGrade.TWO,
    JLTPLevel.N5, "https://jisho.org/魚",
    [new Example("金魚", ["きんぎょ"], ["goldfish"])],
    10,
    ["animal"]
);

const kanji2 = new Kanji(
    "子",
    [new KanjiReading("sakana", "さかな", ReadingType.KUN), new KanjiReading("go", "ご", ReadingType.ON)],
    ["fish"],
    KyoikuGrade.TWO,
    JLTPLevel.N5, "https://jisho.org/魚",
    [new Example("金魚", ["きんぎょ"], ["goldfish"])],
    10,
    ["animal"]
);

const kanji3 = new Kanji(
    "子",
    [new KanjiReading("sakana", "さかな", ReadingType.KUN), new KanjiReading("go", "ご", ReadingType.ON)],
    ["child", "boy", "young person", "infant"],
    KyoikuGrade.TWO,
    JLTPLevel.N5, "https://jisho.org/魚",
    [new Example("金魚", ["きんぎょ"], ["goldfish"])],
    10,
    ["animal"]
);

test('Should render the kanji character', async () => {
    mockKanjiService.mockResolvedValueOnce({ value: kanji });
    const component = renderReduxConsumer(<KanjiShowcaseCard />);
    expect(await component.findByText('魚')).toBeInTheDocument();
});

test('Should render the kanji character in the globally selected font', async () => {
    store.dispatch(setFont("test-font"));
    mockKanjiService.mockResolvedValueOnce({ value: kanji });

    const component = renderReduxConsumer(<KanjiShowcaseCard />);

    expect(await component.findByText('魚')).toHaveStyle({ 'font-family': 'test-font' });
});

test('Should render the grade', async () => {
    mockKanjiService.mockResolvedValueOnce({ value: kanji });
    const component = renderReduxConsumer(<KanjiShowcaseCard />);
    expect(await component.findByText('2')).toBeInTheDocument();
});

test('Should render the JLPT level', async () => {
    mockKanjiService.mockResolvedValueOnce({ value: kanji });
    const component = renderReduxConsumer(<KanjiShowcaseCard />);
    expect(await component.findByText('N5')).toBeInTheDocument();
});

test('Should render the strokes', async () => {
    mockKanjiService.mockResolvedValueOnce({ value: kanji });
    const component = renderReduxConsumer(<KanjiShowcaseCard />);
    expect(await component.findByText('10')).toBeInTheDocument();
});

test('Should render the examples quantity', async () => {
    mockKanjiService.mockResolvedValueOnce({ value: kanji });
    const component = renderReduxConsumer(<KanjiShowcaseCard />);
    expect(await component.findByText('1')).toBeInTheDocument();
});

test('Should render the error if the service call fails', async () => {
    mockKanjiService.mockResolvedValueOnce({ error: "Failed to retrieve kanji." });
    const component = renderReduxConsumer(<KanjiShowcaseCard />);
    expect(await component.findByText('Failed to retrieve kanji.')).toBeInTheDocument();
});

test('Should render the error if the service call is rejected', async () => {
    mockKanjiService.mockRejectedValueOnce({ error: "Failed to retrieve kanji." });
    const component = renderReduxConsumer(<KanjiShowcaseCard />);
    expect(await component.findByText('Failed to retrieve kanji.')).toBeInTheDocument();
});

test('Clicking the shuffle button should render a new kanji', async () => {
    // Should render the first kanji initially
    mockKanjiService.mockResolvedValueOnce({ value: kanji });
    const component = renderReduxConsumer(<KanjiShowcaseCard />);
    expect(await component.findByText('魚')).toBeInTheDocument();

    // Clicking the shuffle button should render the next
    mockKanjiService.mockResolvedValueOnce({ value: kanji2 });
    fireEvent.click(component.getByTitle('Shuffle'));
    expect(await component.findByText('子')).toBeInTheDocument();
});

test('Should render a pop-over with the full meanings if they exceed 23 characters in length', async() => {
    // Render the kanji character with many meaning values
    mockKanjiService.mockResolvedValueOnce({ value: kanji3 });
    const component = renderReduxConsumer(<KanjiShowcaseCard />);
    expect(await component.findByText('子')).toBeInTheDocument();

    // Hover over the trimmed meanings text
    fireEvent.mouseOver(component.getByText('child, boy, young perso...'));
    expect(await screen.findByText('Meanings')).toBeInTheDocument();
    expect(await screen.findByText('child, boy, young person, infant')).toBeInTheDocument();
});

test('Should route to the kanji search page when clicking the link', async () => {
    // Render a kanji character
    mockKanjiService.mockResolvedValueOnce({ value: kanji });
    const component = renderReduxConsumer(<KanjiShowcaseCard />);
    expect(await component.findByText('魚')).toBeInTheDocument();

    // Clicking the link should route to the kanji search page
    expect(component.getByText('search all kanji')).toHaveAttribute('href', '/kanji');
});
