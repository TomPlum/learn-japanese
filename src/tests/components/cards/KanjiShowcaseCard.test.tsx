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
import renderTranslatedReduxConsumer from "../../renderTranslatedReduxConsumer";

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
    [new KanjiReading("su", "す", ReadingType.ON), new KanjiReading("shi", "し", ReadingType.ON), new KanjiReading("ko", "こ", ReadingType.KUN)],
    ["sign of the rat", "child"],
    KyoikuGrade.TWO,
    JLTPLevel.N5, "https://jisho.org/子",
    [new Example("女子", ["おなご", "じょし"], ["women", "girl"])],
    3,
    ["family"]
);

const kanji3 = new Kanji(
    "子",
    [new KanjiReading("sakana", "さかな", ReadingType.KUN), new KanjiReading("uo", "うお", ReadingType.KUN), new KanjiReading("go", "ご", ReadingType.ON)],
    ["child", "boy", "young person", "infant"],
    KyoikuGrade.TWO,
    JLTPLevel.N5, "https://jisho.org/魚",
    [],
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
    const component = renderTranslatedReduxConsumer(<KanjiShowcaseCard />);
    expect(await component.findByText('魚')).toBeInTheDocument();

    // Clicking the shuffle button should render the next
    mockKanjiService.mockResolvedValueOnce({ value: kanji2 });
    fireEvent.click(component.getByTitle('Shuffle'));
    expect(await component.findByText('子')).toBeInTheDocument();
});

test('Should render a pop-over with the full meanings if they exceed 23 characters in length', async() => {
    // Render the kanji character with many meaning values
    mockKanjiService.mockResolvedValueOnce({ value: kanji3 });
    const component = renderTranslatedReduxConsumer(<KanjiShowcaseCard />);
    expect(await component.findByText('子')).toBeInTheDocument();

    // Hover over the trimmed meanings text
    fireEvent.mouseOver(component.getByText('child, boy, young perso...'));
    expect(await screen.findByText('Meanings')).toBeInTheDocument();
    expect(await screen.findByText('child, boy, young person, infant')).toBeInTheDocument();
});

test('Should route to the kanji search page when clicking the link', async () => {
    // Render a kanji character
    mockKanjiService.mockResolvedValueOnce({ value: kanji });
    const component = renderTranslatedReduxConsumer(<KanjiShowcaseCard />);
    expect(await component.findByText('魚')).toBeInTheDocument();

    // Clicking the link should route to the kanji search page
    expect(component.getByText('search all kanji')).toHaveAttribute('href', '/kanji');
});

test('Should render the examples display modal when clicking the examples button', async () => {
    // Render a kanji that has at least 1 example
    mockKanjiService.mockResolvedValueOnce({ value: kanji });
    const component = renderTranslatedReduxConsumer(<KanjiShowcaseCard />);
    expect(await component.findByText('魚')).toBeInTheDocument();

    // Click the example icon button
    fireEvent.click(component.getByTitle('Examples'));

    // Should render the examples display modal
    expect(await screen.findByTestId('kanji-example-display')).toBeInTheDocument();

    // Closing it should stop rendering it
    fireEvent.click(screen.getByText('Close'));
    expect(await screen.queryByTestId('kanji-example-display')).not.toBeInTheDocument();
});

test('Clicking the examples button should not render the examples display if the kanji has none', async () => {
    // Render a kanji that has no examples
    mockKanjiService.mockResolvedValueOnce({ value: kanji3 });
    const component = renderTranslatedReduxConsumer(<KanjiShowcaseCard />);
    expect(await component.findByText('子')).toBeInTheDocument();

    // Click the example icon button
    fireEvent.click(component.getByTitle('Examples'));

    // Should NOT render the examples display modal
    expect(await screen.queryByTestId('kanji-example-display')).not.toBeInTheDocument();
});

test('If a kanji has multiple on readings, when hovering over it, it should render a pop-over with them all', async () => {
    // Render a kanji that has multiple on'yomi readings
    mockKanjiService.mockResolvedValueOnce({ value: kanji2 });
    const component = renderTranslatedReduxConsumer(<KanjiShowcaseCard />);
    expect(await component.findByText('子')).toBeInTheDocument();

    // Mouse over the displayed reading
    fireEvent.mouseOver(component.getByText('す'));

    // Should render a pop-over modal with all the on readings
    expect(await screen.findByText('On\'Yomi Readings')).toBeInTheDocument();
    expect(await screen.findByText('す, し')).toBeInTheDocument();
});

test('If a kanji has multiple kun readings, when hovering over it, it should render a pop-over with them all', async () => {
    // Render a kanji that has multiple kun'yomi readings
    mockKanjiService.mockResolvedValueOnce({ value: kanji3 });
    const component = renderTranslatedReduxConsumer(<KanjiShowcaseCard />);
    expect(await component.findByText('子')).toBeInTheDocument();

    // Mouse over the displayed reading
    fireEvent.mouseOver(component.getByText('さかな'));

    // Should render a pop-over modal with all the kun readings
    expect(await screen.findByText('Kun\'Yomi Readings')).toBeInTheDocument();
    expect(await screen.findByText('さかな, うお')).toBeInTheDocument();
});
